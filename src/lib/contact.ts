import { z } from "zod";

const budgetValues = ["", "under-1k", "1k-3k", "3k-7k", "7k-plus", "role"] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  company: z.string().trim().max(100, "Please keep the company name under 100 characters."),
  budget: z.enum(budgetValues),
  message: z
    .string()
    .trim()
    .min(20, "Please add a little more detail (at least 20 characters).")
    .max(3000, "Please keep the message under 3,000 characters."),
  website: z.string().max(200),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactFormValues;

export type ContactActionState = {
  status: "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string[]>>;
};

export const contactActionCopy = {
  validation: "Please check the highlighted fields and try again.",
  rateLimit: "Too many messages were sent from this connection. Please try again in 15 minutes.",
} as const;
