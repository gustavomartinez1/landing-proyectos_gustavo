import { ProjectCard } from "./ProjectCard";
import { useProjectsAnimation } from "../hooks/useProjectsAnimation";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  const { containerRef } = useProjectsAnimation();

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
