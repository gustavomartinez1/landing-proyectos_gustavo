"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useProjectsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll("[data-project-card]");

      if (cards.length > 0) {
        gsap.fromTo(
          Array.from(cards),
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return { containerRef };
}
