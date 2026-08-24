import "server-only";
import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/contact";

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    throw new Error("Resend contact environment variables are not configured.");
  }

  return {
    client: new Resend(apiKey),
    from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
    to,
  };
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function sendContactEmail(values: ContactFormValues) {
  const { client, from, to } = getResendConfig();
  const context = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "Not provided"}`,
    `Budget: ${values.budget || "Not provided"}`,
    "",
    values.message,
  ].join("\n");

  const { error } = await client.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `Portfolio enquiry — ${singleLine(values.name)}`,
    text: context,
  });

  if (error) {
    throw new Error(`Resend rejected the contact email: ${error.message}`);
  }
}
