import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.contact.metadata.title,
  description: site.contact.metadata.description,
};

const icons = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
} as const;

const hrefs = {
  Email: `mailto:${site.links.email}`,
  LinkedIn: site.links.linkedin,
  GitHub: site.links.github,
} as const;

export default function ContactPage() {
  const { eyebrow, title, lead, channels, form } = site.contact;

  return (
    <>
      <Section aria-label={eyebrow} className="pt-16 sm:pt-24">
        <Container>
          <Reveal mode="inView">
            <p className="mb-5 font-mono text-[12px] tracking-[0.08em] text-accent-text">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl font-display text-[clamp(42px,7vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {title}
            </h1>
          </Reveal>

          <Reveal mode="inView" delay={0.08}>
            <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
              <p className="max-w-[52ch] text-[17px] leading-8 text-muted">{lead}</p>
              <Badge className="shrink-0">
                <span className="pulse-dot" aria-hidden="true" />
                {site.availability}
              </Badge>
            </div>
          </Reveal>

          <div className="mt-12 grid min-w-0 gap-8 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal mode="inView" delay={0.12} className="min-w-0">
              <div className="min-w-0">
                <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-dim">
                  {channels.eyebrow}
                </p>
                <h2 className="font-display text-[27px] font-semibold tracking-[-0.025em]">
                  {channels.title}
                </h2>

                <ul className="mt-7 space-y-px overflow-hidden rounded-card border border-line bg-line">
                  {channels.items.map((item) => {
                    const Icon = icons[item.label];
                    const href = hrefs[item.label];
                    const external = href.startsWith("http");

                    return (
                      <li key={item.label} className="bg-card">
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="group flex min-w-0 items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-bg-2"
                        >
                          <Icon
                            className="h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-accent-text"
                            aria-hidden="true"
                          />
                          <span className="min-w-0">
                            <span className="block font-mono text-[10.5px] tracking-[0.08em] text-dim uppercase">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block truncate font-mono text-[13px] text-text transition-colors group-hover:text-accent-text">
                              {item.value}
                            </span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-6 font-mono text-[11.5px] leading-6 text-dim">
                  {site.location}
                </p>
              </div>
            </Reveal>

            <Reveal mode="inView" delay={0.18} className="min-w-0">
              <ContactForm />
              <p className="mt-5 font-mono text-[11.5px] leading-6 text-dim">
                {form.fallbackPrefix}{" "}
                <a
                  href={`mailto:${site.links.email}`}
                  className="break-all text-muted underline decoration-line-2 underline-offset-4 transition-colors hover:text-accent-text"
                >
                  {site.links.email}
                </a>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
