import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/data/projects";

type ProjectsGridProps = {
  projects: readonly Project[];
  priorityFirst?: boolean;
};

export function ProjectsGrid({ projects, priorityFirst = false }: ProjectsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.slug} mode="inView" delay={(index % 3) * 0.08} className="h-full">
          <ProjectCard project={project} priority={priorityFirst && index === 0} />
        </Reveal>
      ))}
    </div>
  );
}
