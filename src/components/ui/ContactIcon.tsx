import { Github, Linkedin, Mail } from "lucide-react";
import { siWhatsapp } from "simple-icons";

export type ContactIconName = "Email" | "LinkedIn" | "GitHub" | "WhatsApp";

type ContactIconProps = {
  name: ContactIconName;
  className?: string;
};

const icons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

export function ContactIcon({ name, className }: ContactIconProps) {
  if (name === "WhatsApp") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d={siWhatsapp.path} fill="currentColor" />
      </svg>
    );
  }

  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
