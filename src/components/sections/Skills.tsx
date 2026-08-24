import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StackIcon } from "@/components/ui/StackIcon";
import { site } from "@/lib/site";

export function Skills() {
  const { skills } = site.home;

  return (
    <Section aria-label={skills.eyebrow} className="border-y border-line bg-bg-2">
      <Container>
        <Reveal mode="inView">
          <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-14">
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                {skills.eyebrow}
              </p>
              <h2 className="max-w-3xl font-display text-[clamp(32px,5vw,50px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {skills.title}
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-8 text-muted">{skills.description}</p>
          </div>
        </Reveal>

        <Reveal mode="inView" delay={0.08}>
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {site.stack.map((technology) => (
              <li
                key={technology}
                className="flex min-h-24 flex-col items-center justify-center gap-3 bg-card px-4 py-5 text-center text-muted transition-colors last:col-span-2 hover:text-accent-text"
              >
                <StackIcon name={technology} />
                <span className="font-mono text-[11px]">{technology}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, index) => (
            <Reveal key={group.label} mode="inView" delay={(index % 3) * 0.06} className="h-full">
              <article className="h-full rounded-card border border-line bg-card p-5 sm:p-6">
                <h3 className="font-mono text-[11px] tracking-[0.08em] text-accent-text">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-[13px] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
