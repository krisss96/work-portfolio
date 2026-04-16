"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import type { Project } from "@/lib/projects";
import styles from "./ProjectsCarousel.module.css";

function ProjectSlot({ project, slotIndex }: {
    project: Project;
    slotIndex: number;
}) {
    // Radius of the invisible circle the cards sit on
    const radius = 15;
    // Spacing between the boxes
    const theta = 0.35;

    // The angle for this specific fixed slot
    const angle = slotIndex * theta;

    // Reverse the arc so the center sits farther back and the curve opens toward camera
    const x = Math.sin(angle) * radius;
    const z = -Math.cos(angle) * radius;

    return (
        <group position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <mesh>
                <planeGeometry args={[4.8, 5]} />
                <meshBasicMaterial color="#222" side={THREE.DoubleSide} />
            </mesh>
            <Text
                position={[0, -2.9, 0.1]}
                fontSize={0.22}
                color="#120a43"
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
                <div className={styles.breadcrumb}>INTERACTIONS, LAYOUT, & CUSTOM CODE</div>
            </header>

            <div className={styles.canvasStage}>
                {/* We move the camera further back to see the outward arch */}
                <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
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