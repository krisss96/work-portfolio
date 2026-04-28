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
            Hello, my name is Kristiyana Petrova, a 20-year-old from Varna, Bulgaria, currently studying my second year at Fontys University of Applied Sciences in Eindhoven.
            I’ve always been drawn to creative work and art, which is what led me to study ICT & Media Design. As a junior in this field, I’m focused on trying out new things and improving my skills.I genuinely enjoy the learning process and I am always looking for ways to improve with every project I do.
            I am also very communicative and love being part of a team where we can collaborate and be creative together.
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
              <li>Frontend: React, Next.js, Flutter, JavaScript, Three.js, CSS, HTML</li>
                <li>Backend: Java(Spring Boot), Node.js</li>
              <li>Databases: SQL</li>
              <li>Design: Figma</li>
              <li>Tools: Git</li>
            </ul>
          </div>
          <div className={styles.skillsColumn}>
            <h4>Soft Skills:</h4>
            <ul>
              <li>Communication & teamwork</li>
                <li>Adaptability</li>
              <li>Problem solving & critical thinking</li>
              <li>Time management & organization</li>

            </ul>
          </div>
        </div>

    ),
  };

  return (
    <section className={`${styles.aboutSection} no-snap`}>
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
                <img
                  src="/Group%20433.png"
                  alt="Profile"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    // Prevent infinite loop and show a safe fallback
                    img.onerror = null;
                    img.src = '/img.png';
                  }}
                />
              <a href="/KRISTIYANA-PETROVA-Resume.pdf (1).pdf" className={styles.cvButton} download>
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
