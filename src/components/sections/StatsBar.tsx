import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function StatsBar() {
  const { stats } = site.home;

  return (
    <section aria-label={stats.eyebrow} className="border-y border-line bg-bg-2">
      <Container>
        <Reveal mode="inView">
          <div className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
            {stats.items.map((item) => (
              <div key={item.label} className="px-4 py-7 first:pl-0 sm:px-6 sm:py-8 sm:first:pl-0">
                <strong className="block font-display text-[28px] font-semibold tracking-[-0.03em] text-accent-text">
                  {item.value}
                </strong>
                <span className="mt-1 block font-mono text-[10.5px] leading-5 text-dim">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
