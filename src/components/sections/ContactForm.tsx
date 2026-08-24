"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-[9px] border border-line bg-bg-2 px-4 py-3 text-[15px] text-text transition-colors duration-200 placeholder:text-dim hover:border-line-2 focus:border-accent-text";

const labelClass = "mb-2 block font-mono text-[11px] tracking-[0.08em] text-dim uppercase";

export function ContactForm() {
  const { form } = site.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No form backend is configured, so the submission is composed into a
  // prefilled email addressed to the site owner.
  const mailto = () => {
    const subject = `${form.subjectPrefix}${name ? ` — ${name}` : ""}`;
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    return `mailto:${site.links.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      action={mailto()}
      method="post"
      encType="text/plain"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailto();
      }}
      className="rounded-card border border-line bg-card p-6 sm:p-8"
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
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={form.fields.name.placeholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {form.fields.email.label}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={form.fields.email.placeholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={labelClass}>
          {form.fields.message.label}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={form.fields.message.placeholder}
          className={`${fieldClass} resize-y leading-7`}
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6">
        <Button type="submit" size="lg">
          {form.submit}
        </Button>
        <p className="font-mono text-[11.5px] leading-6 text-dim">{form.note}</p>
      </div>
    </form>
  );
}
