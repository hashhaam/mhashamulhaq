import { ImageResponse } from "next/og";
import { OpenGraphCard } from "@/components/seo/OpenGraphCard";
import { site } from "@/lib/site";

export const alt = site.seo.openGraph.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <OpenGraphCard
      eyebrow={site.seo.openGraph.eyebrow}
      title={site.seo.openGraph.title}
      description={site.seo.openGraph.description}
    />,
    size,
  );
}
