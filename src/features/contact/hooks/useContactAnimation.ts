"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useContactAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const container = containerRef.current;
      if (!container) return;

      gsap.fromTo(
        container,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return { containerRef };
}
