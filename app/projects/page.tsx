import ProjectsCarousel from "@/app/components/ProjectsCarousel";
import styles from "./page.module.css";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <ProjectsCarousel projects={projects} />
    </main>
  );
}

