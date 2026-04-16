import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__bg} aria-hidden />

      <div className={styles["hero__title-giant"]} style={{ fontFamily: anton.style.fontFamily }}>
        PORTFOLIO
      </div>

      <div className={styles.hero__content}>
        <h1 className={styles.hero__name}>Kristiyana Petrova</h1>
        <div className={styles.hero__roles}>
          <div>Web Developer</div>
          <div>UI/UX Designer</div>
        </div>
        <a href="#projects" className={styles.hero__cta}>
          EXPLORE MY WORK
        </a>
      </div>

      <div aria-hidden className={styles.hero__portrait}>
        <Image src="/IMG1d.png" alt="portrait" width={900} height={1300} priority />
      </div>
    </div>
  );
}
