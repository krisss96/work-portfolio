import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./Projects.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.projectCard}>
      <div className={styles.projectMeta}>
        <span>{project.year}</span>
        <span>{project.role}</span>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectSubtitle}>{project.subtitle}</p>
      <p className={styles.projectSummary}>{project.summary}</p>
    </Link>
  );
}

