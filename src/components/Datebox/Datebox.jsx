import React from "react";
import Cardbox from "../Cardbox/Cardbox";
import Datecard from "../Datecard/Datecard";
import styles from "./Datebox.module.css";

export default function Datebox() {
  return (
    <div>
      <div className={styles.dateBoxContainer}>
        <div className={styles.dateBgLine}></div>
      </div>
      <Cardbox />
      <Datecard />
    </div>
  );
}
