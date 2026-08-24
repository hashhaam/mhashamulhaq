import { Code2, DatabaseZap, SearchCheck } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

const icons = [Code2, DatabaseZap, SearchCheck] as const;

export function Services() {
  const { services } = site.home;

  return (
    <Section aria-label={services.eyebrow}>
      <Container>
        <Reveal mode="inView">
          <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
            {services.eyebrow}
          </p>
          <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-14">
            <h2 className="max-w-3xl font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
              {services.title}
            </h2>
            <p className="max-w-xl text-[16px] leading-8 text-muted">{services.description}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={service.index} mode="inView" delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-line bg-card p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-5 w-5 text-accent-text" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-dim">{service.index}</span>
                  </div>
                  <h3 className="mt-7 font-display text-[25px] font-semibold leading-tight tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-7 text-muted">{service.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-dim"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
