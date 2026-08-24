import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function Testimonials() {
  const { testimonials } = site.home;

  return (
    <Section aria-label={testimonials.eyebrow} className="border-y border-line bg-bg-2">
      <Container>
        <Reveal mode="inView">
          <div className="grid gap-8 rounded-card border border-line bg-card p-6 sm:p-9 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                {testimonials.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(30px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {testimonials.title}
              </h2>
            </div>
            <div className="self-end border-l border-line pl-6 sm:pl-8">
              <Quote className="h-6 w-6 text-accent-text" aria-hidden="true" />
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-muted">
                {testimonials.placeholder}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="font-mono text-[11px] tracking-[0.06em] text-dim">
                  {testimonials.label}
                </span>
                <Button href={testimonials.cta.href} variant="ghost">
                  {testimonials.cta.label} <span aria-hidden="true">{"→"}</span>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
