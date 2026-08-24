import { ContactCta } from "@/components/sections/ContactCta";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";

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
