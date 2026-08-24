"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitContact } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import {
  contactSchema,
  type ContactActionState,
  type ContactField,
  type ContactFormValues,
} from "@/lib/contact";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-[9px] border border-line bg-bg-2 px-4 py-3 text-[15px] text-text transition-colors duration-200 placeholder:text-dim hover:border-line-2 focus:border-accent-text disabled:cursor-not-allowed disabled:opacity-60";

const labelClass = "mb-2 block font-mono text-[11px] tracking-[0.08em] text-dim uppercase";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const { form } = site.contact;
  const [result, setResult] = useState<ContactActionState | null>(null);
  const [isPending, startTransition] = useTransition();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit((values) => {
    setResult(null);

    startTransition(async () => {
      const response = await submitContact(values);

      if (response.fieldErrors) {
        Object.entries(response.fieldErrors).forEach(([field, messages]) => {
          const message = messages?.[0];
          if (message) {
            setError(field as ContactField, { type: "server", message });
          }
        });
      }

      setResult(response);

      if (response.status === "success") {
        reset(defaultValues);
      }
    });
  });

  const fieldError = (field: ContactField) => {
    const message = errors[field]?.message;

    return message ? (
      <p id={`contact-${field}-error`} className="mt-2 text-[12px] text-accent-text">
        {message}
      </p>
    ) : null;
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="min-w-0 rounded-card border border-line bg-card p-6 sm:p-8"
    >
      <p className="mb-6 font-mono text-[11px] tracking-[0.08em] text-accent-text">
        {form.eyebrow}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            {form.fields.name.label}
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder={form.fields.name.placeholder}
            className={fieldClass}
            disabled={isPending}
            {...register("name")}
          />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {form.fields.email.label}
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder={form.fields.email.placeholder}
            className={fieldClass}
            disabled={isPending}
            {...register("email")}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            {form.fields.company.label}
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            placeholder={form.fields.company.placeholder}
            className={fieldClass}
            disabled={isPending}
            {...register("company")}
          />
          {fieldError("company")}
        </div>

        <div>
          <label htmlFor="contact-budget" className={labelClass}>
            {form.fields.budget.label}
          </label>
          <select
            id="contact-budget"
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "contact-budget-error" : undefined}
            className={fieldClass}
            disabled={isPending}
            {...register("budget")}
          >
            <option value="">{form.fields.budget.placeholder}</option>
            {form.fields.budget.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldError("budget")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={labelClass}>
          {form.fields.message.label}
        </label>
        <textarea
          id="contact-message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder={form.fields.message.placeholder}
          className={`${fieldClass} resize-y leading-7`}
          disabled={isPending}
          {...register("message")}
        />
        {fieldError("message")}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">{form.fields.website.label}</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          placeholder={form.fields.website.placeholder}
          {...register("website")}
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? form.submitting : form.submit}
        </Button>
        <p className="font-mono text-[11.5px] leading-6 text-dim">{form.note}</p>
      </div>

      {result && (
        <p
          role={result.status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-5 rounded-[9px] border px-4 py-3 text-[13px] ${
            result.status === "success"
              ? "border-accent-text text-accent-text"
              : "border-line-2 text-text"
          }`}
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
