import React from "react";
import styles from "./Datecard.module.css";

export default function Datecard() {
  return (
    <div className={styles.container}>
      <div className={styles.dateBoxWrap}></div>
      <div className={styles.dateBoxWrap}>날짜 정리</div>
      <div className={styles.dateLine}></div>
    </div>
  );
}
