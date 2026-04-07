"use client";

import { SectionHeading } from "@/shared/ui/SectionHeading";
import { AboutContent } from "@/features/about/components/AboutContent";

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-20 md:py-32 px-4 border-t border-border"
    >
      <SectionHeading
        overline="Sobre mí"
        title="Desarrollo con propósito"
      />
      <AboutContent />
    </section>
  );
}
