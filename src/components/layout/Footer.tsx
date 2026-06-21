import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: `mailto:${site.links.email}` },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-[9px] font-display text-[17px] font-semibold tracking-[-0.02em] text-text">
            <span className="h-[8px] w-[8px] rounded-full bg-accent" aria-hidden="true" />
            {site.name}
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <ul className="flex flex-wrap items-center gap-5">
            {socials.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="font-mono text-[13px] text-muted transition-colors duration-200 hover:text-accent-text"
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="font-mono text-[12px] text-dim">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
