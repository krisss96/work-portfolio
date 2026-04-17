"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Project } from "@/lib/projects";
import styles from "./ProjectsCarousel.module.css";
import contactStyles from "../contact/page.module.css";

function ProjectSlot({ project, slotIndex }: {
    project: Project;
    slotIndex: number;
}) {
    const router = useRouter();
    // Radius of the invisible circle the cards sit on
    // Increased radius to keep 30% larger cards separated on the arc
    const radius = 22;
    // Spacing between the boxes
    // Keep cards close while preventing overlap at larger size
    const theta = 0.58;

    // The angle for this specific fixed slot
    const angle = slotIndex * theta;

    // Reverse the arc so the center sits farther back and the curve opens toward camera
    const x = Math.sin(angle) * radius;
    const z = -Math.cos(angle) * radius;

    const handleClick = () => {
        router.push(`/projects/${project.slug}`);
    };

    const handlePointerOver = () => {
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
        document.body.style.cursor = 'auto';
    };

    return (
        <group position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <mesh
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                {/* Plane size increased by 30% */}
                <planeGeometry args={[13, 13.95]} />
                <meshBasicMaterial color="#222" side={THREE.DoubleSide} />
            </mesh>
            <Text
                /* Keep label proportionally below the larger card */
                position={[0, -7.62, 0.1]}
                fontSize={0.56}
                color="#c62828"
                fontWeight={700}
                anchorX="center"
            >
                {project.title.toUpperCase()}
            </Text>
        </group>
    );
}

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
    const [offset, setOffset] = useState(0);
    const projectCount = projects.length;

    const next = () => setOffset((prev) => (prev + 1) % projectCount);
    const prev = () => setOffset((prev) => (prev - 1 + projectCount) % projectCount);

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h2 className={`${contactStyles.title} ${styles.carouselTitle}`}>My work</h2>
            </header>

            <div className={styles.canvasStage}>
                {/* Pull camera back slightly to comfortably frame larger cards */}
                <Canvas camera={{ position: [0, 0, 24], fov: 35 }}>
                    <ambientLight intensity={0.5} />

                    {/* Shift the reversed arc closer to the camera */}
                    <group position={[0, 0, 14]}>
                        {projects.map((_, index) => {
                            // This logic keeps the ARCH positions fixed
                            const projectIndex = (index + offset) % projectCount;
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
                <button className={styles.arrowButton} onClick={prev}>&larr;</button>
                <button className={styles.arrowButton} onClick={next}>&rarr;</button>
            </div>
        </section>
    );
}