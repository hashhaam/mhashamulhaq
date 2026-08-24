import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function HomeAbout() {
  const { about } = site.home;

  return (
    <Section aria-label={about.eyebrow}>
      <Container>
        <Reveal mode="inView">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                {about.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {about.title}
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-2xl text-[17px] leading-8 text-muted">{about.description}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-dim">{about.secondary}</p>
              <Button href={about.cta.href} variant="outline" className="mt-7">
                {about.cta.label} <span aria-hidden="true">{"→"}</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
