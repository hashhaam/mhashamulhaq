import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getProjectBySlug, projects, projectsContent } from "@/lib/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isClient = project.type === "client";

  return (
    <>
      <Section aria-label={project.title} className="pt-12 sm:pt-16">
        <Container>
          <Reveal mode="inView">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[12px] text-muted transition-colors hover:text-accent-text"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {projectsContent.labels.back}
            </Link>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12">
              <div>
                <p className="mb-4 font-mono text-[12px] tracking-[0.08em] text-accent-text">
                  {isClient ? projectsContent.labels.client : projectsContent.labels.personal}
                </p>
                <h1 className="font-display text-[clamp(42px,7vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em]">
                  {project.title}
                </h1>
              </div>
              <div>
                <p className="text-[17px] leading-8 text-muted">{project.summary}</p>
                {!isClient && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github && (
                      <Button href={project.github} variant="outline">
                        <Github className="h-4 w-4" aria-hidden="true" />
                        {projectsContent.labels.github}
                      </Button>
                    )}
                    {project.live && (
                      <Button href={project.live} variant="outline">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        {projectsContent.labels.live}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Container>
        <Reveal mode="inView">
          <figure className="overflow-hidden rounded-card border border-line bg-card">
            <div className="relative aspect-[16/8] min-h-[260px]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1180px) 100vw, 1120px"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-line px-5 py-3 font-mono text-[11px] text-dim">
              {projectsContent.labels.screenshot}
            </figcaption>
          </figure>
        </Reveal>
      </Container>

      <Section aria-label={projectsContent.labels.details}>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: projectsContent.labels.problem, value: project.problem },
              { label: projectsContent.labels.role, value: project.role },
              { label: projectsContent.labels.outcome, value: project.outcome },
            ].map((item, index) => (
              <Reveal
                key={item.label}
                mode="inView"
                delay={(index % 2) * 0.08}
                className={index === 2 ? "md:col-span-2" : ""}
              >
                <article className="h-full rounded-card border border-line bg-card p-6 sm:p-8">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-accent-text">
                    {item.label}
                  </p>
                  <p className="mt-5 max-w-3xl text-[16px] leading-8 text-muted">{item.value}</p>
                </article>
              </Reveal>
            ))}

            <Reveal mode="inView" className="md:col-span-2">
              <article className="rounded-card border border-line bg-bg-2 p-6 sm:p-8">
                <p className="font-mono text-[11px] tracking-[0.08em] text-accent-text">
                  {projectsContent.labels.stack}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-2 px-3 py-1.5 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
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
