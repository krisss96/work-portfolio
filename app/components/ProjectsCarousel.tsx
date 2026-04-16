"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectsCarousel.module.css";

type ProjectsCarouselProps = {
  projects: Project[];
};

const carouselImageBySlug: Record<string, string> = {
  "luxury-retail-web": "/img_4.png",
  "saas-dashboard-suite": "/belcohero.png",
  "creative-portfolio-platform": "/img_5.png",
};

export default function ProjectsCarousel({ projects }: Readonly<ProjectsCarouselProps>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectCount = projects.length;

  const shiftIndex = (delta: number) => {
    setActiveIndex((current) => {
      if (projectCount === 0) {
        return current;
      }
      return (current + delta + projectCount) % projectCount;
    });
  };

  const visibleSlides = useMemo(() => {
    if (projectCount === 0) {
      return [] as Array<{ project: Project; slot: "edgeLeft" | "left" | "center" | "right" | "edgeRight" }>;
    }

    const getProjectAtOffset = (offset: number) =>
      projects[(activeIndex + offset + projectCount) % projectCount];

    return [
      { project: getProjectAtOffset(-2), slot: "edgeLeft" as const },
      { project: getProjectAtOffset(-1), slot: "left" as const },
      { project: getProjectAtOffset(0), slot: "center" as const },
      { project: getProjectAtOffset(1), slot: "right" as const },
      { project: getProjectAtOffset(2), slot: "edgeRight" as const },
    ];
  }, [activeIndex, projectCount, projects]);

  if (projectCount === 0) {
    return null;
  }

  const activeProject = projects[activeIndex];

  return (
    <section
      className={styles.section}
      aria-label="Projects carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          shiftIndex(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          shiftIndex(1);
        }
      }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>BECOMING A WEBFLOW WIZARD</h1>
        <p className={styles.subtitle}>Interactions, Layout, &amp; Custom Code</p>
        <span className={styles.decorCircle} aria-hidden="true" />
      </header>

      <div className={styles.viewport}>
        <div className={styles.rail}>
          {visibleSlides.map(({ project, slot }, index) => {
            const imageSrc = carouselImageBySlug[project.slug] ?? project.heroImage.src;
            const isCenter = slot === "center";

            return (
              <Link
                key={`${project.slug}-${slot}-${index}`}
                href={`/projects/${project.slug}`}
                className={`${styles.slide} ${styles[slot]}`}
                aria-current={isCenter ? "true" : undefined}
              >
                <Image
                  src={imageSrc}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 33vw"
                  className={styles.slideImage}
                  priority={isCenter}
                />
                <div className={styles.slideOverlay}>
                  <p className={styles.slideTitle}>{project.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrowButton} onClick={() => shiftIndex(-1)} aria-label="Show previous project">
          &larr;
        </button>
        <button type="button" className={styles.arrowButton} onClick={() => shiftIndex(1)} aria-label="Show next project">
          &rarr;
        </button>
      </div>

      <p className={styles.activeLabel}>{activeProject.title}</p>
    </section>
  );
}

