import React from "react";
import Timeline from "../Timeline/Timeline";
import styles from "./Calendar.module.scss";

export default function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.calendarPosition}>
        <div className={styles.calendarWrap}>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
