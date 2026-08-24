import Link from "next/link";
import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const exploreIcons: Record<string, LucideIcon> = {
  "/projects": BriefcaseBusiness,
  "/about": UserRound,
  "/contact": MessageCircleMore,
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={siWhatsapp.path} fill="currentColor" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: site.links.github, Icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${site.links.email}`, Icon: Mail },
  {
    label: "WhatsApp",
    detail: site.links.phone,
    href: `https://wa.me/${site.links.phone.replace(/\D/g, "")}`,
    Icon: WhatsAppIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-card/30">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 border-b border-line pb-10 md:grid-cols-[1.5fr_0.7fr_0.8fr] md:gap-12">
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
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-text"
                    >
                      {item.label}
                      <Icon
                        className="h-4 w-4 text-accent-text transition-colors duration-200 group-hover:text-text"
                        aria-hidden="true"
                      />
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
              {socials.map((social) => {
                const external = social.href.startsWith("http");
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-text"
                    >
                      <span>
                        {social.label}
                        {social.detail ? (
                          <span className="mt-0.5 block font-mono text-[10.5px] tracking-[-0.01em] text-muted">
                            {social.detail}
                          </span>
                        ) : null}
                      </span>
                      <social.Icon
                        className="h-4 w-4 shrink-0 text-accent-text transition-colors duration-200 group-hover:text-text"
                        aria-hidden="true"
                      />
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
