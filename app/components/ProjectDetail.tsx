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
  const isBelcoProject = project.slug === "temp-animation-studio";
  const isVirtualGalleryProject = project.slug === "temp-data-visualization";
  const isPacxonProject = project.slug === "temp-interactive-landing";
  const mediaSrc = isBelcoProject ? "/belcovideo.mp4" : project.demoVideoUrl;
  const isLocalMp4 = mediaSrc.endsWith(".mp4");

  return (
    <main className={`${styles.projectDetailPage} ${isBelcoProject ? styles.projectDetailPageBelco : ""}`}>
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
              <div className={styles.projectHeroTextWrap}>
                <h1 className={`${styles.projectHeroTitle} ${isBelcoProject ? styles.projectHeroTitleBelco : ""}`}>{project.title}</h1>
                {isBelcoProject && <p className={styles.projectHeroSubheaderBelco}>Developed for Belco Allience</p>}
                {!isBelcoProject && (
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                )}
              </div>
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
                {isLocalMp4 ? (
                  <video
                    className={styles.projectMediaVideo}
                    src={mediaSrc}
                    controls
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <iframe
                    className={styles.projectMediaVideo}
                    src={mediaSrc}
                    title={`${project.title} demo video`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
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

          <section className={`${styles.projectInfoColumn} ${isBelcoProject ? styles.projectInfoColumnBelco : ""}`} aria-label="Project information">
            <article className={styles.projectInfoCard}>
              <h2>Project description:</h2>
              <p>{project.summary}</p>
              <ul className={styles.projectHighlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.projectInfoCard}>
              <h2>Role:</h2>
              <p>{project.role}</p>
            </article>

            {project.aboutTheClient && (
              <article className={styles.projectInfoCard}>
                <h2>{project.aboutTheClient.label || "About the client:"}</h2>
                {project.aboutTheClient.name && (
                  <p>
                    <strong className={styles.projectLabelEmphasis}>{project.aboutTheClient.label === "About the collaborator:" ? "Collaborator:" : "Client:"}</strong> {project.aboutTheClient.name}
                  </p>
                )}
                {project.aboutTheClient.description && (
                  <p>
                    {project.aboutTheClient.description.split(/\n+/).map((para, idx) => {
                      // Bold 'Client:' and 'Problem:' labels
                      if (para.startsWith("Client:")) {
                        return (
                          <span key={idx}>
                            <strong className={styles.projectLabelEmphasis}>Client:</strong>{" "}{para.replace(/^Client:/, "").trim()}
                            <br />
                          </span>
                        );
                      }
                      if (para.startsWith("Problem:")) {
                        return (
                          <span key={idx}>
                            <strong className={styles.projectLabelEmphasis}>Problem:</strong>{" "}{para.replace(/^Problem:/, "").trim()}
                            <br />
                          </span>
                        );
                      }
                      return (
                        <span key={idx}>
                          {para}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                )}
              </article>
            )}

            <article className={styles.projectInfoCard}>
              <h2>Technology used:</h2>
              <ul className={styles.projectTechList}>
                {project.stack.map((item) => (
                  <li key={item} className={styles.projectTechPill}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.projectInfoCard}>
              <h2>Professional growth:</h2>
              <ul className={styles.projectHighlights}>
                {project.whatILearned.map((item) => {
                  const separatorIndex = item.indexOf(":");

                  if (separatorIndex === -1) {
                    return <li key={item}>{item}</li>;
                  }

                  const label = item.slice(0, separatorIndex + 1);
                  const description = item.slice(separatorIndex + 1).trim();

                  return (
                    <li key={item}>
                      <strong className={styles.projectLabelEmphasis}>{label}</strong>{" "}
                      {description}
                    </li>
                  );
                })}
              </ul>
            </article>

            {navigation && (
              <article className={styles.projectInfoCard}>
                <h2>Other projects:</h2>
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

