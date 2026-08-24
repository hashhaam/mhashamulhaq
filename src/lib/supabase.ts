import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { ContactFormValues } from "@/lib/contact";

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase contact environment variables are not configured.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function saveContactLead(values: ContactFormValues) {
  const { error } = await getSupabaseAdmin()
    .from("leads")
    .insert({
      name: values.name,
      email: values.email,
      message: values.message,
      company: values.company || null,
      budget: values.budget || null,
    });

  if (error) {
    throw new Error(`Supabase rejected the contact lead: ${error.message}`);
  }
}
