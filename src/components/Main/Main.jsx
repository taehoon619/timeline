import React from "react";
import Calendar from "../Calendar/Calendar";
import Navbar from "../Navbar/Navbar";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.calendarWarp}>
        <Navbar />
        <Calendar />
      </div>
    </div>
  );
}
