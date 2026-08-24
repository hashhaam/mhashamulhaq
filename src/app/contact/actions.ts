"use server";

import { headers } from "next/headers";
import {
  contactActionCopy,
  contactSchema,
  type ContactActionState,
  type ContactField,
  type ContactFormValues,
} from "@/lib/contact";
import { sendContactEmail } from "@/lib/resend";
import { site } from "@/lib/site";
import { saveContactLead } from "@/lib/supabase";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMax = 3;

async function getClientAddress() {
  const requestHeaders = await headers();
  const forwarded = requestHeaders.get("x-forwarded-for");

  return forwarded?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
}

async function passesRateLimit() {
  const now = Date.now();
  const key = await getClientAddress();
  const current = rateLimitStore.get(key);

  if (rateLimitStore.size > 1_000) {
    for (const [address, entry] of rateLimitStore) {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(address);
      }
    }
  }

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return true;
  }

  if (current.count >= rateLimitMax) {
    return false;
  }

  current.count += 1;
  return true;
}

function fieldErrors(
  errors: Record<string, string[] | undefined>,
): Partial<Record<ContactField, string[]>> {
  return errors as Partial<Record<ContactField, string[]>>;
}

export async function submitContact(values: ContactFormValues): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: contactActionCopy.validation,
      fieldErrors: fieldErrors(parsed.error.flatten().fieldErrors),
    };
  }

  if (parsed.data.website) {
    return { status: "success", message: site.contact.form.success };
  }

  if (!(await passesRateLimit())) {
    return { status: "error", message: contactActionCopy.rateLimit };
  }

  try {
    await sendContactEmail(parsed.data);
    await saveContactLead(parsed.data);

    return { status: "success", message: site.contact.form.success };
  } catch (error) {
    console.error("Contact submission failed", error);
    return { status: "error", message: site.contact.form.error };
  }
}
