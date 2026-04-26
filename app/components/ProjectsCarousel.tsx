"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "@/lib/projects";
import styles from "./ProjectsCarousel.module.css";
import contactStyles from "../contact/page.module.css";

function ProjectSlot({ project, slotIndex }: { project: Project; slotIndex: number }) {
  const router = useRouter();
  const imageUrl =
    project.slug === "temp-animation-studio"
      ? "/mockup2.png"
      : project.slug === "temp-data-visualization"
        ? "/mockup1.png"
        : project.heroImage.src;

  const texture = useTexture(imageUrl);
  const radius = 22;
  const theta = 0.58;
  const angle = slotIndex * theta;
  const x = Math.sin(angle) * radius;
  const z = -Math.cos(angle) * radius;

  return (
    <group position={[x, 0, z]} rotation={[0, -angle, 0]}>
      <mesh
        onClick={() => router.push(`/projects/${project.slug}`)}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <planeGeometry args={[13, 13.95]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <Text
        position={[0, -7.62, 0.1]}
        fontSize={0.56}
        color="rgba(112, 15, 15, 0.72)"
        fontWeight={400}
        anchorX="center"
        className={styles.projectTitle}
      >
        {project.title.toUpperCase()}
      </Text>
    </group>
  );
}

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const projectCount = projects.length;
  const [offset, setOffset] = useState(0);

  const canRotate = projectCount > 1;
  const normalizedOffset = useMemo(
    () => (projectCount > 0 ? ((offset % projectCount) + projectCount) % projectCount : 0),
    [offset, projectCount]
  );

  const next = () => {
    if (!canRotate) return;
    setOffset((prev) => prev + 1);
  };

  const prev = () => {
    if (!canRotate) return;
    setOffset((prev) => prev - 1);
  };

  if (projectCount === 0) {
    return (
      <section className={styles.section}>
        <header className={styles.header}>
          <h2 className={`${contactStyles.title} ${styles.carouselTitle}`}>My work</h2>
          <p className={styles.carouselSubtitle}>A curated selection of my work</p>
        </header>
        <p className={styles.emptyState}>No projects found yet.</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={`${contactStyles.title} ${styles.carouselTitle}`}>My work</h2>
        <p className={styles.carouselSubtitle}>A curated selection of my work</p>
      </header>

      <div className={styles.canvasStage}>
        <Canvas camera={{ position: [0, 0, 24], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <group position={[0, 0, 14]}>
            {projects.map((_, index) => {
              const projectIndex = (index + normalizedOffset) % projectCount;
              const slotIndex = index - (projectCount - 1) / 2;

              return (
                <ProjectSlot
                  key={projects[projectIndex].slug}
                  project={projects[projectIndex]}
                  slotIndex={slotIndex}
                />
              );
            })}
          </group>
        </Canvas>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrowButton} onClick={prev} disabled={!canRotate} aria-label="Previous project">
          &larr;
        </button>
        <button className={styles.arrowButton} onClick={next} disabled={!canRotate} aria-label="Next project">
          &rarr;
        </button>
      </div>
    </section>
  );
}