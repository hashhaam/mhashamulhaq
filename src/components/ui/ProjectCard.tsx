import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { projectsContent } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const isClient = project.type === "client";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-card transition-colors duration-200 hover:border-line-2">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${projectsContent.labels.details}: ${project.title}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-bg-2"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1179px) 50vw, 370px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className={`font-mono text-[11px] tracking-[0.08em] ${
              isClient ? "text-accent-text" : "text-dim"
            }`}
          >
            {isClient ? projectsContent.labels.client : projectsContent.labels.personal}
          </span>
          {isClient && (
            <span className="rounded-full border border-line-2 px-2.5 py-1 font-mono text-[10px] tracking-[0.04em] text-muted">
              {projectsContent.labels.nda}
            </span>
          )}
        </div>

        <h2 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.025em] text-text">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent-text">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[15px] leading-7 text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={projectsContent.labels.stack}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] text-dim"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 font-mono text-[12px] text-text transition-colors hover:text-accent-text"
          >
            {projectsContent.labels.details}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>

          {!isClient && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent-text"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              {projectsContent.labels.github}
            </a>
          )}

          {!isClient && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent-text"
            >
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              {projectsContent.labels.live}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
