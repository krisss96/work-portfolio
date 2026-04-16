/* krisss96/work-portfolio/app/components/ProjectsCarousel.tsx */
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectsCarousel.module.css";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectCount = projects.length;

  const shiftIndex = (delta: number) => {
    setActiveIndex((current) => (current + delta + projectCount) % projectCount);
  };

  const visibleSlides = useMemo(() => {
    if (projectCount === 0) return [];
    const getAt = (offset: number) => projects[(activeIndex + offset + projectCount) % projectCount];

    return [
      { project: getAt(-2), slot: "edgeLeft" as const },
      { project: getAt(-1), slot: "left" as const },
      { project: getAt(0), slot: "center" as const },
      { project: getAt(1), slot: "right" as const },
      { project: getAt(2), slot: "edgeRight" as const },
    ];
  }, [activeIndex, projectCount, projects]);

  if (projectCount === 0) return null;

  return (
      <section className={styles.section}>
        <div className={styles.viewport}>
          <div className={styles.rail}>
            {visibleSlides.map(({ project, slot }, index) => (
                <Link
                    key={`${project.slug}-${slot}-${index}`}
                    href={`/projects/${project.slug}`}
                    className={`${styles.slide} ${styles[slot]}`}
                >
                  <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      className={styles.slideImage}
                      priority={slot === "center"}
                  />
                </Link>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrowButton} onClick={() => shiftIndex(-1)}>&larr;</button>
          <button className={styles.arrowButton} onClick={() => shiftIndex(1)}>&rarr;</button>
        </div>
      </section>
  );
}