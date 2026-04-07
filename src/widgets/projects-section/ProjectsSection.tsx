"use client";

import { SectionHeading } from "@/shared/ui/SectionHeading";
import { ProjectsGrid } from "@/features/projects/components/ProjectsGrid";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-32 px-4">
      <SectionHeading
        overline="Portafolio"
        title="Proyectos recientes"
        subtitle="Sitios web desarrollados para clientes reales con resultados medibles."
      />
      <ProjectsGrid />
    </section>
  );
}
