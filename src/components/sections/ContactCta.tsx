import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function ContactCta() {
  const { closing } = site.home;

  return (
    <Section aria-label={closing.eyebrow} className="py-20 sm:py-28">
      <Container>
        <Reveal mode="inView">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-14">
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                {closing.eyebrow}
              </p>
              <h2 className="max-w-3xl font-display text-[clamp(36px,6vw,58px)] font-semibold leading-[1.05] tracking-[-0.035em]">
                {closing.title}
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-muted">{closing.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={closing.primary.href} size="lg">
                {closing.primary.label}
              </Button>
              <Button href={closing.secondary.href} variant="outline" size="lg">
                {closing.secondary.label} <span aria-hidden="true">{"→"}</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
