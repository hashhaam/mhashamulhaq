import Link from "next/link";
import {
  BriefcaseBusiness,
  MessageCircleMore,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { ContactIcon } from "@/components/ui/ContactIcon";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const exploreIcons: Record<string, LucideIcon> = {
  "/projects": BriefcaseBusiness,
  "/about": UserRound,
  "/contact": MessageCircleMore,
};

const linkPreview = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const contactLinks = [
  { label: "GitHub", preview: linkPreview(site.links.github), href: site.links.github },
  { label: "LinkedIn", preview: linkPreview(site.links.linkedin), href: site.links.linkedin },
  { label: "Email", preview: site.links.email, href: `mailto:${site.links.email}` },
  {
    label: "WhatsApp",
    preview: site.links.phone,
    href: `https://wa.me/${site.links.phone.replace(/\D/g, "")}`,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-card/30">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 border-b border-line pb-10 md:grid-cols-[1.05fr_0.45fr_1.1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-[20px] font-semibold tracking-[-0.02em] text-text"
            >
              <BrandMark className="h-10 w-10" />
              {site.name}
            </Link>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">{site.tagline}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {site.availability}
            </div>
          </div>

          <nav aria-label={site.footer.navigationLabel}>
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-text">
              {site.footer.exploreLabel}
            </h2>
            <ul className="space-y-3">
              {site.nav.map((item) => {
                const Icon = exploreIcons[item.href];
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-text"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-accent-text transition-colors duration-200 group-hover:text-text"
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-text">
              {site.footer.connectLabel}
            </h2>
            <ul className="space-y-3">
              {contactLinks.map((contact) => {
                const external = contact.href.startsWith("http");
                return (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={`${contact.label}: ${contact.preview}`}
                      className="group flex min-w-0 items-center gap-3 text-muted transition-colors duration-200 hover:text-text"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-line bg-bg/60 text-accent-text transition-colors duration-200 group-hover:border-line-2 group-hover:text-text">
                        <ContactIcon name={contact.label} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 break-all font-mono text-[11.5px] leading-5">
                        {contact.preview}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.footer.rights}
          </p>
          <p>
            {site.role} · {site.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
