import Link from "next/link";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { projects } from "@/lib/projects";
import contactStyles from "./contact/page.module.css";
import ContactIcon from "./contact/ContactIcon";
import ContactForm from "./contact/ContactForm";
import { getContactLinks } from "./contact/contactData";

export default function Home() {
  const contactLinks = getContactLinks();

  return (
    <div className="snap-container h-full w-full">
      <Section id="main" label="Home" role="main" fullWidth>
        <Hero />
      </Section>

      <Section id="projects" label="Projects" fullWidth>
        <ProjectsCarousel projects={projects} />
        <div className="mt-6 text-center">
          <Link href="/projects" className="underline underline-offset-4 hover:text-red-400">
            Open projects page
          </Link>
        </div>
      </Section>

      <Section id="about" label="About">
        <About />
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
