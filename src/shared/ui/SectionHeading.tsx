import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("text-center mb-12 md:mb-16", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {overline && (
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          {overline}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-primary/50 rounded-full" />
    </motion.div>
  );
}
