import styles from "./page.module.css";
import ContactIcon from "./ContactIcon";
import ContactForm from "./ContactForm";
import { getContactLinks } from "./contactData";

export default function ContactPage() {
  const contactLinks = getContactLinks();

  return (
    <main className={styles.page}>
      <div className={styles.noiseLayer} aria-hidden="true" />
      <div className={styles.shell}>
        <header className={styles.header}>
          <h1 className={styles.title}>Let&apos;s work together</h1>
        </header>

        <div className={styles.grid}>
          <section className={`${styles.card} ${styles.contactMeCard}`} aria-labelledby="contact-me-title">
            <h2 id="contact-me-title" className={styles.cardTitle}>
              Contact me
            </h2>

            <ul className={styles.linkList}>
              {contactLinks.map((item) => {
                const external = item.label === "LinkedIn" || item.label === "Instagram";

                return (
                  <li key={item.label} className={styles.linkItem}>
                    <a
                      href={item.href}
                      className={styles.contactLink}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <ContactIcon kind={item.icon} />
                      <span className={styles.linkLabel}>{item.label}</span>
                      <span className={styles.linkValue}>{item.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className={`${styles.card} ${styles.messageMeCard}`} aria-labelledby="message-me-title">
            <h2 id="message-me-title" className={styles.cardTitle}>
              Message me
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}

