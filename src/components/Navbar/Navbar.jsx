import React from "react";
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { TbArrowsDiagonal2, TbDots } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
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
      <div className={styles.menuBar}>
        <div className={styles.filter}>날짜 없음(1)</div>
        <div className={styles.filter}>필터</div>
        <div className={styles.filter}>정렬</div>
        <div className={styles.iconsWrap}>
          <AiOutlineSearch className={styles.searchIcon} />
        </div>
        <div className={styles.arrowWrap}>
          <div className={styles.iconsWrap}>
            <TbArrowsDiagonal2 className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.iconsWrap}>
          <TbDots className={styles.dotIcons} />
        </div>
        <div className={styles.newMadeWrap}>
          <div className={styles.newMade}>새로 만들기</div>
          <div className={styles.arrowDown}>
            <RiArrowDownSLine className={styles.arrowDownIcon} />
          </div>
          <div className={styles.newMadeWhole}></div>
        </div>
      </div>
    </div>
  );
}
