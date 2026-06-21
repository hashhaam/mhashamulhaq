import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { featuredProjects, projectsContent } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <Section aria-label={projectsContent.featured.eyebrow} className="border-t border-line">
      <Container>
        <Reveal mode="inView">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                {projectsContent.featured.eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-[clamp(32px,5vw,48px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {projectsContent.featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-7 text-muted">
                {projectsContent.featured.description}
              </p>
            </div>
            <Button href={projectsContent.featured.href} variant="outline">
              {projectsContent.featured.cta} <span aria-hidden="true">{"→"}</span>
            </Button>
          </div>
        </Reveal>

        <ProjectsGrid projects={featuredProjects} />
      </Container>
    </Section>
  );
}
