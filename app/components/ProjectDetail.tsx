import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { getProjectNavigation } from "@/lib/projects";
import styles from "./Projects.module.css";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: Readonly<ProjectDetailProps>) {
  const navigation = getProjectNavigation(project.slug);

  return (
    <main className={styles.projectDetailPage}>
      <div className={styles.projectDetailShell}>
        <section className={styles.projectHero} aria-label={`${project.title} hero image`}>
          <div className={styles.projectHeroImageWrap}>
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className={styles.projectHeroImage}
            />
            <div className={styles.projectHeroOverlay}>
              <h1 className={styles.projectHeroTitle}>{project.title}</h1>
            </div>
          </div>
        </section>

        <div className={styles.projectDetailPeriodRow}>
          <span className={styles.projectDetailPeriodLabel}>Development Period</span>
          <span className={styles.projectDetailPeriodValue}>{project.period}</span>
        </div>

        <div className={styles.projectDetailGrid}>
          <section className={styles.projectMediaColumn} aria-label="Project demo and links">
            <div className={styles.projectMediaCard}>
              <div className={styles.projectMediaFrame}>
                <iframe
                  className={styles.projectMediaVideo}
                  src={project.demoVideoUrl}
                  title={`${project.title} demo video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className={styles.projectMediaButtons}>
                <a
                  href={project.demoUrl}
                  className={styles.projectActionPrimary}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.repoUrl}
                  className={styles.projectActionSecondary}
                  target="_blank"
                  rel="noreferrer"
                >
                  Git Repo
                </a>
              </div>
            </div>
          </section>

          <section className={styles.projectInfoColumn} aria-label="Project information">
            <article className={styles.projectInfoCard}>
              <h2>Role:</h2>
              <p>{project.role}</p>
            </article>

            <article className={styles.projectInfoCard}>
              <h2>Technology Used:</h2>
              <ul className={styles.projectTechList}>
                {project.stack.map((item) => (
                  <li key={item} className={styles.projectTechPill}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.projectInfoCard}>
              <h2>Project Overview:</h2>
              <p>{project.summary}</p>
              <ul className={styles.projectHighlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.projectInfoCard}>
              <h2>What I learned:</h2>
              <ul className={styles.projectHighlights}>
                {project.whatILearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            {navigation && (
              <article className={styles.projectInfoCard}>
                <h2>Next projects:</h2>
                <div className={styles.projectNavGrid}>
                  <Link href={`/projects/${navigation.previous.slug}`} className={styles.projectNavLink}>
                    <span className={styles.projectNavLabel}>Previous</span>
                    <span className={styles.projectNavTitle}>{navigation.previous.title}</span>
                  </Link>
                  <Link href={`/projects/${navigation.next.slug}`} className={styles.projectNavLink}>
                    <span className={styles.projectNavLabel}>Next</span>
                    <span className={styles.projectNavTitle}>{navigation.next.title}</span>
                  </Link>
                </div>
              </article>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

