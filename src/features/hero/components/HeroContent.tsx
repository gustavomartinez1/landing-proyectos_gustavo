import { motion } from "framer-motion";
import { Button } from "@/shared/ui/Button";
import { TAGLINE } from "@/config/constants";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      <motion.p
        data-hero-overline
        className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Portafolio de desarrollo web
      </motion.p>

      <motion.h1
        data-hero-title
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Gustavo{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
          Martinez
        </span>
      </motion.h1>

      <motion.p
        data-hero-tagline
        className="mt-6 text-lg md:text-xl text-muted-light max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        {TAGLINE}
      </motion.p>

      <motion.div
        data-hero-cta
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.55 }}
      >
        <Button size="lg" href="#proyectos">
          Ver proyectos
        </Button>
        <Button variant="outline" size="lg" href="#contacto">
          Contactar
        </Button>
      </motion.div>
    </div>
  );
}
