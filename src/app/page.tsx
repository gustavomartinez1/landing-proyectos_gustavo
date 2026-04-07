import { Navbar } from "@/widgets/header/Navbar";
import { Footer } from "@/widgets/footer/Footer";
import { HeroSection } from "@/widgets/hero-section/HeroSection";
import { ProjectsSection } from "@/widgets/projects-section/ProjectsSection";
import { AboutSection } from "@/widgets/about-section/AboutSection";
import { ContactSection } from "@/widgets/contact-section/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
