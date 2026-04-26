"use client";

import React, { useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedDiplomaImage, setSelectedDiplomaImage] = useState<string | null>(null);
  const isSkillsTab = activeTab === "skills";
  const isEducationTab = activeTab === "education";
  const isCertificatesTab = activeTab === "certificates";
  const certificates = [
    {
      title: 'Certificate of Achievement  & Attendance : "Inclusive by Design: Exploring GenAI and Accessibility"',
      details: "International Multimedia/ICT Week | IBA Denmark & Erasmus+",
      date: "March 2026",
      diplomaImage: "/Frame_2.png",
    },
    {
      title: "Propaedeutic Certificate",
      details: "Bachelor in ICT & Media Design | Fontys University of Applied Sciences",
      date: "July 2025",
      diplomaImage: "",
    },
    {
      title: "CS50: Introduction to Computer Science",
      details: "Harvard University",
      date: "In Progress",
      diplomaImage: null,
    },
  ];

  const tabs = [
    { id: "about", label: "About me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
  ];

  const content = {
    about: (
      <div className={styles.glassCard}>
        <p>
          I&apos;m a passionate web developer and UI/UX designer with a focus on
          creating beautiful, functional digital experiences. With expertise in
          modern web technologies and design principles, I bring ideas to life
          through clean code and thoughtful design.
        </p>
      </div>
    ),
    education: (
      <div className={styles.educationContent}>
        <p className={styles.educationItem}>
          <strong>Fontys University of Applied Sciences</strong>
          <br />
          Eindhoven, Netherlands
          <br />
          Bachelor in ICT &amp; Media Design
          <br />
          Sept 2024 - Present
        </p>
        <p className={styles.educationItem}>
          <strong>First Language School</strong>
          <br />
          Varna, Bulgaria
          <br />
          High School Diploma
          <br />
          Sept 2019 - May 2024
        </p>
      </div>
    ),
    certificates: (
      <div className={styles.certificatesGrid}>
        {certificates.map((certificate) => (
          <article key={certificate.title} className={styles.certificateCard}>
            <h3>{certificate.title}</h3>
            <p className={styles.certificateMeta}>{certificate.details}</p>
            <p className={styles.certificateDate}>{certificate.date}</p>
            {certificate.diplomaImage !== null && (
              <button
                type="button"
                className={styles.diplomaButton}
                onClick={() => setSelectedDiplomaImage(certificate.diplomaImage)}
              >
                View Document
              </button>
            )}
          </article>
        ))}
      </div>
    ),
    skills: (
        <div className={styles.skillsGrid}>
          <div className={styles.skillsColumn}>
            <h4>Technical Skills:</h4>
            <ul>
              <li>Frontend: React, Next.js,Flutter,JavaScript, Three.js, CSS, HTML</li>
                <li>Backend: Spring(Java), Node.js</li>
              <li>Databases:SQL</li>
              <li>Design: Figma</li>
              <li>Tools: Git</li>
            </ul>
          </div>
          <div className={styles.skillsColumn}>
            <h4>Soft Skills:</h4>
            <ul>
              <li>Communication and teamwork</li>
                <li>Adaptability</li>
              <li>Problem solving and critical thinking</li>
              <li>Time management and organization</li>

            </ul>
          </div>
        </div>

    ),
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`${styles.contentWrapper} ${
            isSkillsTab || isEducationTab || isCertificatesTab ? styles.contentWrapperNoImage : ""
          }`}
        >
          <div className={styles.content}>
            {content[activeTab as keyof typeof content]}
          </div>
          {!isSkillsTab && !isEducationTab && !isCertificatesTab && (
            <div className={styles.imageWrapper}>
              <img src="/Group 433.png" alt="Profile" />
              <a href="/cv.pdf" className={styles.cvButton} download>
                Download CV
              </a>
            </div>
          )}
        </div>
      </div>

      {selectedDiplomaImage !== null && (
        <div
          className={styles.diplomaModalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Diploma preview"
          onClick={() => setSelectedDiplomaImage(null)}
        >
          <div className={styles.diplomaModal} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.diplomaCloseButton}
              onClick={() => setSelectedDiplomaImage(null)}
              aria-label="Close diploma preview"
            >
              x
            </button>
            {selectedDiplomaImage ? (
              <img src={selectedDiplomaImage} alt="Diploma preview" className={styles.diplomaImage} />
            ) : (
              <div className={styles.diplomaPlaceholder}>Diploma image placeholder</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
