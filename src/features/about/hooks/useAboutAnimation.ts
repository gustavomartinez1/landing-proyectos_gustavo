"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useAboutAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const container = containerRef.current;
      if (!container) return;

      const textEl = container.querySelector("[data-about-text]");
      const accentEl = container.querySelector("[data-about-accent]");

      if (textEl) {
        gsap.fromTo(
          textEl,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              scrub: 1,
            },
          }
        );
      }

      if (accentEl) {
        gsap.fromTo(
          accentEl,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return { containerRef };
}
