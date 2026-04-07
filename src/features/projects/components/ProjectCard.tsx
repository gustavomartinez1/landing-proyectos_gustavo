import { motion } from "framer-motion";
import { Badge } from "@/shared/ui/Badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

// Placeholder gradient colors per project
const gradients: Record<string, string> = {
  "monstera-cafe": "from-emerald-900/60 to-green-900/40",
  "viajes-3m": "from-sky-900/60 to-blue-900/40",
  toroperro: "from-amber-900/60 to-orange-900/40",
  "villa-del-mar": "from-cyan-900/60 to-teal-900/40",
  "rifa-medica-felix": "from-rose-900/60 to-pink-900/40",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const gradient = gradients[project.id] || "from-primary/20 to-emerald-900/40";

  return (
    <motion.a
      data-project-card
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl border border-border overflow-hidden bg-surface hover:border-primary/40 transition-colors duration-300"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Image placeholder */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">
            {project.type === "Cafetería" && "☕"}
            {project.type === "Agencia de viajes" && "✈️"}
            {project.type === "Restaurante" && "🍽️"}
            {project.type === "Evento" && "🎉"}
          </div>
          <p className="text-xs text-muted-light font-medium tracking-wide uppercase">
            {project.type}
          </p>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <svg
            className="w-4 h-4 text-muted flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <p className="text-sm text-muted mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
