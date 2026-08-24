import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: site.notFound.metadataTitle,
    description: site.notFound.description,
    path: "/404",
  }),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section aria-label={site.notFound.eyebrow} className="flex min-h-[70vh] items-center">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-[12px] tracking-[0.08em] text-accent-text">
            {site.notFound.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(46px,8vw,82px)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {site.notFound.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-muted">
            {site.notFound.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={site.notFound.primary.href} size="lg">
              {site.notFound.primary.label}
            </Button>
            <Button href={site.notFound.secondary.href} size="lg" variant="outline">
              {site.notFound.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
