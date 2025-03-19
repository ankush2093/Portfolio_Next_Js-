import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { EducationSection } from "@/components/sections/educstion";


export default function Home() {
  return (
    
      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection/>
        <ContactSection />
        <Footer/>
      </main>
   
  );
}