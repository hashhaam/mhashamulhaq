import { ImageResponse } from "next/og";
import { OpenGraphCard } from "@/components/seo/OpenGraphCard";
import { getProjectBySlug, projectsContent } from "@/lib/data/projects";
import { site } from "@/lib/site";

export const alt = projectsContent.metadata.socialAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type ProjectOpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectOpenGraphImage({ params }: ProjectOpenGraphImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return new ImageResponse(
    <OpenGraphCard
      eyebrow={
        project?.type === "client"
          ? projectsContent.labels.client
          : projectsContent.labels.personal
      }
      title={project?.title ?? site.seo.openGraph.title}
      description={project?.summary ?? site.seo.openGraph.description}
    />,
    size,
  );
}
