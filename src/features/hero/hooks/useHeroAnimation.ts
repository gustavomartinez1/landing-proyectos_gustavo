"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useHeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const container = containerRef.current;
      if (!container) return;

      const overline = container.querySelector("[data-hero-overline]");
      const title = container.querySelector("[data-hero-title]");
      const tagline = container.querySelector("[data-hero-tagline]");
      const cta = container.querySelector("[data-hero-cta]");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (overline) {
        tl.fromTo(overline, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0);
      }
      if (title) {
        tl.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, 0.15);
      }
      if (tagline) {
        tl.fromTo(tagline, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.35);
      }
      if (cta) {
        tl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.55);
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return { containerRef };
}
