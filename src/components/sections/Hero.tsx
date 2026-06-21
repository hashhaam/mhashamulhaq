import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <Container as="section" aria-label="Introduction">
      <div className="grid grid-cols-1 gap-11 pt-14 pb-10 min-[880px]:grid-cols-[1.15fr_0.85fr] min-[880px]:items-center min-[880px]:gap-[60px] min-[880px]:pt-[88px] min-[880px]:pb-14">
        {/* Left column — intro copy + CTAs */}
        <div>
          <Reveal delay={0.15} className="mb-[26px]">
            <Badge>
              <span className="pulse-dot" aria-hidden="true" />
              {site.availability}
            </Badge>
          </Reveal>

          <Reveal delay={0.25}>
            <h1 className="mb-6 font-display text-[clamp(38px,6vw,62px)] font-semibold leading-[1.04] tracking-[-0.03em]">
              I build fast, SEO-ready web products that{" "}
              <span className="text-accent-text">convert.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mb-[22px] max-w-[33ch] text-[18px] text-muted">{site.subhead}</p>
            <p className="mb-[34px] font-mono text-[12.5px] tracking-[0.01em] text-dim">
              {site.trajectory.map((step, i) => (
                <Fragment key={step.month}>
                  {i > 0 && <span className="px-1">{"→"}</span>}
                  <b className="font-medium text-muted">{step.month}</b> {step.label}
                </Fragment>
              ))}
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={site.cta.primary.href} variant="solid" size="lg">
                {site.cta.primary.label}
              </Button>
              <Button href={site.cta.work.href} variant="outline" size="lg" className="group">
                {site.cta.work.label}{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  {"→"}
                </span>
              </Button>
              <Button href={site.cta.cv.href} variant="ghost" size="lg">
                {site.cta.cv.label}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right column — terminal "at a glance" summary card */}
        <Reveal delay={0.3}>
          <div className="overflow-hidden rounded-card border border-line bg-card font-mono">
            <div className="flex items-center gap-[7px] border-b border-line px-4 py-[13px]">
              <span className="h-[11px] w-[11px] rounded-full border border-line-2" aria-hidden="true" />
              <span className="h-[11px] w-[11px] rounded-full border border-line-2" aria-hidden="true" />
              <span className="h-[11px] w-[11px] rounded-full border border-accent bg-accent" aria-hidden="true" />
              <span className="ml-1.5 text-[12px] text-dim">mhashamulhaq — at a glance</span>
            </div>

            <div className="px-[18px] pt-[18px] pb-5">
              <div className="mb-[14px] text-[12.5px] text-dim">{"// the short version"}</div>
              {site.stats.map((row, i) => (
                <div
                  key={row.key}
                  className={`flex justify-between gap-[14px] py-2 text-[13px] ${
                    i === 0 ? "" : "border-t border-dashed border-line-soft"
                  }`}
                >
                  <span className="text-muted">{row.key}</span>
                  <span className="text-right text-text">
                    {"accent" in row && row.accent ? (
                      <b className="font-medium text-accent-text">{row.value}</b>
                    ) : (
                      row.value
                    )}
                    {i === site.stats.length - 1 && (
                      <span className="term-cursor" aria-hidden="true" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tech stack row */}
      <Reveal delay={0.6}>
        <div className="flex flex-wrap items-center gap-x-[22px] gap-y-[10px] border-t border-line pt-[26px] pb-[60px]">
          <span className="mr-2 font-mono text-[11.5px] tracking-[0.04em] text-dim">STACK</span>
          {site.stack.map((tech) => (
            <span
              key={tech}
              className="cursor-default font-mono text-[13px] text-muted transition-colors duration-200 hover:text-accent-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
