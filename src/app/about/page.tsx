import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.about.metadata.title,
  description: site.about.metadata.description,
};

export default function AboutPage() {
  const { intro, journey, capabilities, approach, closing } = site.about;

  return (
    <>
      <Section aria-label={intro.eyebrow} className="pt-16 sm:pt-24">
        <Container>
          <Reveal mode="inView">
            <p className="mb-5 font-mono text-[12px] tracking-[0.08em] text-accent-text">
              {intro.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(42px,7vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {intro.title}
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-6 border-t border-line pt-8 md:grid-cols-2 md:gap-12">
            <Reveal mode="inView" delay={0.08}>
              <p className="max-w-[34ch] text-[20px] leading-8 text-text">{intro.lead}</p>
            </Reveal>
            <Reveal mode="inView" delay={0.16}>
              <p className="max-w-[52ch] text-[16px] leading-8 text-muted">{intro.body}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section aria-label={journey.eyebrow} className="bg-bg-2">
        <Container>
          <Reveal mode="inView">
            <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
              {journey.eyebrow}
            </p>
            <h2 className="max-w-2xl font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
              {journey.title}
            </h2>
          </Reveal>

          <div className="relative mt-12 sm:mt-16">
            <div
              className="absolute top-2 bottom-2 left-[5px] w-px bg-line-2 sm:left-[155px]"
              aria-hidden="true"
            />
            <ol className="space-y-10 sm:space-y-12">
              {journey.items.map((item, index) => (
                <li key={item.date} className="relative grid pl-9 sm:grid-cols-[132px_1fr] sm:gap-12 sm:pl-0">
                  <span
                    className="absolute top-2 left-0 h-[11px] w-[11px] rounded-full border-2 border-bg-2 bg-accent sm:left-[150px]"
                    aria-hidden="true"
                  />
                  <Reveal mode="inView" delay={index * 0.04}>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-accent-text">
                      {item.date}
                    </span>
                  </Reveal>
                  <Reveal mode="inView" delay={0.08 + index * 0.04}>
                    <article className="max-w-2xl">
                      <h3 className="font-display text-[24px] font-semibold tracking-[-0.02em] text-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-muted">{item.description}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section aria-label={capabilities.eyebrow}>
        <Container>
          <Reveal mode="inView">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
              <div>
                <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                  {capabilities.eyebrow}
                </p>
                <h2 className="font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                  {capabilities.title}
                </h2>
              </div>
              <p className="max-w-2xl self-end text-[16px] leading-8 text-muted">
                {capabilities.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.areas.map((area, index) => (
              <Reveal key={area.index} mode="inView" delay={index * 0.1} className="h-full">
                <article className="h-full rounded-card border border-line bg-card p-6 sm:p-8">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-dim">{area.index}</p>
                  <h3 className="mt-5 font-display text-[27px] font-semibold tracking-[-0.025em]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{area.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-dim"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label={approach.eyebrow} className="border-y border-line bg-bg-2">
        <Container>
          <Reveal mode="inView">
            <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
              {approach.eyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
              {approach.title}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
            {approach.values.map((value, index) => (
              <Reveal key={value.title} mode="inView" delay={index * 0.08} className="bg-card">
                <article className="h-full p-6 sm:p-8">
                  <span className="font-mono text-[11px] text-accent-text">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-[22px] font-semibold tracking-[-0.02em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label={closing.eyebrow} className="py-20 sm:py-28">
        <Container>
          <Reveal mode="inView">
            <div className="flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                  {closing.eyebrow}
                </p>
                <h2 className="max-w-2xl font-display text-[clamp(34px,5vw,54px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                  {closing.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[16px] leading-7 text-muted">
                  {closing.description}
                </p>
              </div>
              <Button href={closing.href} size="lg">
                {closing.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
