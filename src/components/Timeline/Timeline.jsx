import React from "react";
import styles from "./Timeline.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Datebox from "../Datebox/Datebox";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <div>
        <Datebox />
      </div>
      {/* 타임라인 헤더는 앱솔루트 */}
      <div className={styles.timeLineHeader}>
        <div className={styles.timeLineDate}>
          <div className={styles.dateTextWrap}>
            <div className={styles.dateIconBox}>
              <RxDoubleArrowRight className={styles.dateIcon} />
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
      <div className={styles.timeLineCard}>
        <div className={styles.cardWrap}>
          <div className={styles.cardWidth}></div>
          <div>
            <div></div>
          </div>
          <div className={styles.cardSection}></div>
          <div className={styles.cardSection}></div>
          <div className={styles.cardSection}></div>
        </div>
      </div>
    </div>
  );
}
