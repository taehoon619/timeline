import React from "react";
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.timeLineText}>
        <div className={styles.timeLineView}>
          <CiViewTimeline />
          <h4>타임라인 보기</h4>
        </div>
        <div>
          <AiOutlinePlus />
        </div>
      </div>
      <div className={styles.menuBar}></div>
    </div>
  );
}
