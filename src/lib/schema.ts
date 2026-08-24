import { projectsContent, type Project } from "@/lib/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

export function globalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        jobTitle: site.role,
        description: site.seo.description,
        email: `mailto:${site.links.email}`,
        sameAs: [site.links.github, site.links.linkedin],
        knowsAbout: [...site.stack],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.seo.schema.addressLocality,
          addressCountry: site.seo.schema.addressCountry,
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: site.seo.schema.alumniOf,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.seo.description,
        inLanguage: site.language,
        author: { "@id": personId },
      },
    ],
  };
}

export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    ...breadcrumbNode(items),
  };
}

function breadcrumbNode(items: readonly BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function projectPageSchema(project: Project) {
  const path = `/projects/${project.slug}`;
  const relatedLinks = [project.github, project.live].filter(
    (link): link is string => Boolean(link),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(path)}#project`,
        name: project.title,
        description: project.summary,
        url: absoluteUrl(path),
        image: absoluteUrl(project.image),
        genre:
          project.type === "client"
            ? projectsContent.labels.client
            : projectsContent.labels.personal,
        keywords: [...project.stack],
        creator: { "@id": personId },
        isPartOf: { "@id": websiteId },
        inLanguage: site.language,
        ...(relatedLinks.length > 0 ? { sameAs: relatedLinks } : {}),
      },
      breadcrumbNode([
        { name: site.seo.breadcrumbs.home, path: "/" },
        { name: site.seo.breadcrumbs.projects, path: "/projects" },
        { name: project.title, path },
      ]),
    ],
  };
}
