import { useAboutAnimation } from "../hooks/useAboutAnimation";

export function AboutContent() {
  const { containerRef } = useAboutAnimation();

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto text-center">
      <p
        data-about-text
        className="text-lg md:text-xl text-muted-light leading-relaxed"
      >
        Soy{" "}
        <span className="text-foreground font-medium">Gustavo Martinez</span>,
        desarrollador web en{" "}
        <span className="text-primary">Aguascalientes, México</span>. Me
        especializo en crear sitios web rápidos, modernos y orientados a
        resultados. Desde landing pages hasta aplicaciones complejas, cada
        proyecto es una oportunidad para demostrar que la tecnología bien hecha
        genera impacto real.
      </p>
      <div
        data-about-accent
        className="mt-8 flex justify-center gap-8 text-sm text-muted"
      >
        <div className="text-center">
          <p className="font-heading text-2xl font-bold text-foreground">5+</p>
          <p>Proyectos</p>
        </div>
        <div className="w-px bg-border" />
        <div className="text-center">
          <p className="font-heading text-2xl font-bold text-foreground">100%</p>
          <p>Estáticos</p>
        </div>
        <div className="w-px bg-border" />
        <div className="text-center">
          <p className="font-heading text-2xl font-bold text-foreground">
            &lt;1s
          </p>
          <p>Load time</p>
        </div>
      </div>
    </div>
  );
}
