import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: site.seo.title,
  description: site.seo.description,
  path: "/",
  keywords: site.seo.keywords,
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HomeAbout />
      <FeaturedProjects />
      <Skills />
      <Services />
      <Testimonials />
      <ContactCta />
    </>
  );
}
