import Link from "next/link";
import styles from "../components/Projects.module.css";

export default function DemoUnavailablePage() {
  return (
    <main className={styles.section} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <h1>Demo currently unavailable</h1>
        <p>The demo for this project is not available at the moment. Please check back later.</p>
        <p>
          <Link href="/" className={styles.projectActionPrimary}>
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}

