import { Suspense } from "react";
import Loading from "./loading";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import Footer from "@/components/sections/footer";


export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer/>
      </main>
    </Suspense>
  );
}