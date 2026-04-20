"use client";

import React, { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const isSkillsTab = activeTab === "skills";

  const tabs = [
    { id: "about", label: "About me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
  ];

  const content = {
    about: (
      <div>
        <p>
          I&apos;m a passionate web developer and UI/UX designer with a focus on
          creating beautiful, functional digital experiences. With expertise in
          modern web technologies and design principles, I bring ideas to life
          through clean code and thoughtful design.
        </p>
      </div>
    ),
    education: (
      <div>
        <h3>Education</h3>
        <p>
          <strong>Bachelor of Science in Computer Science</strong>
          <br />
          University Name, 2020 - 2024
        </p>
        <p>
          <strong>Web Development Bootcamp</strong>
          <br />
          Bootcamp Name, 2023
        </p>
      </div>
    ),
    certificates: (
      <div>
        <h3>Certifications</h3>
        <ul>
          <li>Web Development Certification</li>
          <li>UI/UX Design Certificate</li>
          <li>React Advanced Patterns</li>
          <li>Three.js Mastery</li>
        </ul>
      </div>
    ),
    skills: (
      <div>
        <div className={styles.skillsGrid}>
          <div className={styles.skillsColumn}>
            <h4>Technical Skills</h4>
            <ul>
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>3D Graphics: Three.js, R3F</li>
              <li>Design: Figma, UI/UX Principles</li>
              <li>Tools: Git, VSCode, Vercel, Firebase</li>
            </ul>
          </div>
          <div className={styles.skillsColumn}>
            <h4>Soft Skills</h4>
            <ul>
              <li>Communication and teamwork</li>
              <li>Problem solving and critical thinking</li>
              <li>Time management and organization</li>
              <li>Adaptability and continuous learning</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={`${styles.contentWrapper} ${isSkillsTab ? styles.contentWrapperNoImage : ""}`}>
        <div className={styles.content}>
          {content[activeTab as keyof typeof content]}
        </div>
        {!isSkillsTab && (
          <div className={styles.imageWrapper}>
            <img src="/Group 433.png" alt="Profile" />
            <a href="/cv.pdf" className={styles.cvButton} download>
              Download CV
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

