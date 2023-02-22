import React from "react";
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.timeLineTextWrap}>
        <div className={styles.timeLineText}>
          <div className={styles.timeLine}>
            <div className={styles.timeLineView}>
              <di className={styles.timeLineBox}>
                <CiViewTimeline className={styles.timeLineIcon} />
                <h4 className={styles.lineText}>타임라인 보기</h4>
              </di>
            </div>
          </div>
          <div className={styles.contentPlusIcon}>
            <AiOutlinePlus className={styles.contentPlus} />
          </div>
        </div>
      </div>
      <div className={styles.menuBar}></div>
    </div>
  );
}
