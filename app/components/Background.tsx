import React from "react";
import styles from "./Background.module.css";

const Background = () => (
  <div className={styles.backgroundContainer} aria-hidden="true">
    <div className={`${styles.circle} ${styles.circle1}`}></div>
    <div className={`${styles.circle} ${styles.circle2}`}></div>
    <div className={`${styles.circle} ${styles.circle3}`}></div>
    <div className={`${styles.circle} ${styles.circle4}`}></div>
      <div className={`${styles.circle} ${styles.circle5}`}></div>
  </div>
);

export default Background;

