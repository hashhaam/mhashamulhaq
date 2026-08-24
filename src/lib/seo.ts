import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  absoluteTitle?: boolean;
};

export const seoTheme = {
  background: "#17130e",
  lightBackground: "#f6f1e8",
  surface: "#1f1a13",
  line: "rgba(240, 221, 190, 0.16)",
  text: "#f3ece0",
  muted: "#a99c88",
  accent: "#f0a93b",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} · ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
