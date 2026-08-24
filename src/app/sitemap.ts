import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.seo.lastUpdated);
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/projects"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...projectPages];
}
