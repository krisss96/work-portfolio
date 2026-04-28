"use client";

import { useEffect } from "react";

export default function ParallaxScroll() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));
    if (!sections.length) return;

    let ticking = false;

    const update = () => {
      ticking = false;

      const mid = window.innerHeight / 2;
      // Find the section whose middle is closest to viewport middle
      let bestIndex = 0;
      let bestDistance = Infinity;

      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - mid);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });

      sections.forEach((el, i) => {
        el.classList.toggle("is-active", i === bestIndex);
        el.classList.toggle("is-upcoming", i === bestIndex + 1);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // initial update
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}

