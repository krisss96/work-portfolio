"use client";

import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import localFont from "next/font/local";

const brandel = localFont({
    src: "../../public/brandel-luchador.regular.ttf",
    display: "swap",
});

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__bg} aria-hidden />

            <div className={styles["hero__title-giant"]} style={{ fontFamily: brandel.style.fontFamily }}>
                PORTFOLIO
            </div>

            <div className={styles.hero__content}>
                <h1 className={styles.hero__name} style={{ fontFamily: brandel.style.fontFamily }}>
                    Kristiyana Petrova
                </h1>
                <div className={styles.hero__roles}>
                    <div>Web Developer</div>
                    <div>UI/UX Designer</div>
                </div>
            </div>

            {/* Centered Button Container - Separate from hero__content */}
            <div className={styles.hero__ctaContainer}>
                <a href="#projects" className={styles.hero__cta}>
                    EXPLORE MY WORK
                    <span className={styles.arrow}>↓</span>
                </a>
            </div>

            <div aria-hidden className={styles.hero__portrait}>
                <Image src="/IMG1d.png" alt="portrait" width={900} height={1300} priority />
            </div>
        </div>
    );
}