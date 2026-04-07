"use client";

import { HeroContent } from "@/features/hero/components/HeroContent";
import { useHeroAnimation } from "@/features/hero/hooks/useHeroAnimation";

export function HeroSection() {
  const { containerRef } = useHeroAnimation();

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <HeroContent />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
