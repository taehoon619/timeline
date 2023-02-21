import React from "react";
import styles from "./Timeline.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <div>
        {/* 타임라인 헤더는 앱솔루트 */}
        <div className={styles.timeLineHeader}>
          <div className={styles.timeLineDate}>
            <div className={styles.dateTextWrap}>
              <div className={styles.dateIcon}>
                <RxDoubleArrowRight />
              </div>
              <span>2023년 2월</span>
              <div className={styles.TimelineBox}></div>
            </div>
            <div className={styles.timeLineDayWrap}>
              <div className={styles.TimelineBox}></div>
              <div className={styles.monthBox}>
                월
                <RiArrowDownSLine className={styles.downArrowIcon} />
              </div>
              <div className={styles.leftIconBox}>
                <RiArrowLeftSLine className={styles.leftArrowIcon} />
              </div>
              <div className={styles.toDayBox}>오늘</div>
              <div className={styles.rightIconBox}>
                <RiArrowRightSLine className={styles.rightArrowIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}