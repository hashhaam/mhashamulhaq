import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects, projectsContent } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: projectsContent.metadata.title,
  description: projectsContent.metadata.description,
};

export default function ProjectsPage() {
  return (
    <>
      <Section aria-label={projectsContent.intro.eyebrow} className="pt-16 sm:pt-24">
        <Container>
          <Reveal mode="inView">
            <p className="mb-5 font-mono text-[12px] tracking-[0.08em] text-accent-text">
              {projectsContent.intro.eyebrow}
            </p>
            <div className="grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12">
              <h1 className="max-w-3xl font-display text-[clamp(42px,7vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]">
                {projectsContent.intro.title}
              </h1>
              <p className="max-w-xl text-[16px] leading-8 text-muted">
                {projectsContent.intro.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section aria-label={projectsContent.metadata.title} className="border-t border-line pt-12">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </Section>

      <Section aria-label={projectsContent.closing.eyebrow} className="border-t border-line bg-bg-2">
        <Container>
          <Reveal mode="inView">
            <div className="flex flex-col items-start gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                  {projectsContent.closing.eyebrow}
                </p>
                <h2 className="max-w-2xl font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                  {projectsContent.closing.title}
                </h2>
              </div>
              <Button href={projectsContent.closing.href} size="lg">
                {projectsContent.closing.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
