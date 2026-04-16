import Link from "next/link";
import Section from "./components/Section";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import styles from "./components/Projects.module.css";
import { getFeaturedProjects } from "@/lib/projects";
import contactStyles from "./contact/page.module.css";
import ContactIcon from "./contact/ContactIcon";
import ContactForm from "./contact/ContactForm";
import { getContactLinks } from "./contact/contactData";

export default function Home() {
  const featuredProjects = getFeaturedProjects(3);
  const contactLinks = getContactLinks();

  return (
    <div className="snap-container h-full w-full">
      <Section id="main" label="Home" role="main" fullWidth>
        <Hero />
      </Section>

      <Section id="projects" label="Projects">
        <div className="max-w-5xl w-full px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="mt-4 text-lg">Open any card to see the full project page.</p>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/projects" className="underline underline-offset-4 hover:text-red-400">
              View all projects
            </Link>
          </div>
        </div>
      </Section>

      <Section id="about" label="About">
        <div className="prose max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-lg">A short bio and background.</p>
        </div>
      </Section>

      <Section id="contact" label="Contact" fullWidth>
        <div className={contactStyles.section}>
          <div className={contactStyles.noiseLayer} aria-hidden="true" />
          <div className={contactStyles.shell}>
            <header className={contactStyles.header}>
              <h2 className={contactStyles.title}>Let&apos;s work together</h2>
            </header>

            <div className={contactStyles.grid}>
              <section className={`${contactStyles.card} ${contactStyles.contactMeCard}`} aria-labelledby="contact-me-title">
                <h3 id="contact-me-title" className={contactStyles.cardTitle}>
                  Contact me
                </h3>

                <ul className={contactStyles.linkList}>
                  {contactLinks.map((item) => {
                    const external = item.label === "LinkedIn" || item.label === "Instagram";

                    return (
                      <li key={item.label} className={contactStyles.linkItem}>
                        <a
                          href={item.href}
                          className={contactStyles.contactLink}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                        >
                          <ContactIcon kind={item.icon} />
                          <span className={contactStyles.linkLabel}>{item.label}</span>
                          <span className={contactStyles.linkValue}>{item.value}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section className={`${contactStyles.card} ${contactStyles.messageMeCard}`} aria-labelledby="message-me-title">
                <h3 id="message-me-title" className={contactStyles.cardTitle}>
                  Message me
                </h3>
                <ContactForm />
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
