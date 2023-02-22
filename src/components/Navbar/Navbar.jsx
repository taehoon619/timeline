import React, { useState } from "react";
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { TbArrowsDiagonal2, TbDots } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [timeHover, setTimeHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [datHover, setDotHover] = useState(false);

  const timeLineHover = () => {
    setTimeHover(true);
    // setTimeout(() => setTimeHover(true), 800);
  };

  const menuArrowHover = () => {
    setArrowHover(true);
    // setTimeout(() => setArrowHover(true), 800);
  };

  const menuDotHover = () => {
    setDotHover(true);
    // setTimeout(() => setDotHover(true), 800);
  };

  const clearTimeHover = () => {
    setTimeHover(false);
    // clearTimeout(timeLineHover);
  };

  const clearArrowHover = () => {
    setArrowHover(false);
    // clearTimeout(menuArrowHover);
  };

  const clearDotHover = () => {
    setDotHover(false);
    // clearTimeout(menuDotHover);
  };
  console.log(timeHover);
  return (
    <div className={styles.container}>
      <div className={styles.timeLineTextWrap}>
        <div className={styles.timeLineText}>
          <div className={styles.timeLine}>
            <div className={styles.timeLineView}>
              <div
                onMouseOver={timeLineHover}
                onMouseOut={clearTimeHover}
                className={styles.timeLineBox}
              >
                <CiViewTimeline className={styles.timeLineIcon} />
                <h4 className={styles.lineText}>타임라인 보기</h4>
              </div>
            </div>
            <div className={styles.timeLineHoverBox}>
              {timeHover && (
                <div className={styles.timeLineHover}>
                  타임라인 보기
                  <br />
                  데이터베이스
                </div>
              )}
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
        <div
          onMouseOver={menuArrowHover}
          onMouseOut={clearArrowHover}
          className={styles.arrowWrap}
        >
          <div className={styles.timeLineHoverBox}>
            {arrowHover && (
              <div className={styles.arrowHover}>전체 페이지로 열기</div>
            )}
          </div>
          <div className={styles.iconsWrap}>
            <TbArrowsDiagonal2 className={styles.arrowIcon} />
          </div>
        </div>
        <div
          onMouseOver={menuDotHover}
          onMouseOut={clearDotHover}
          className={styles.iconsWrap}
        >
          <div className={styles.timeLineHoverBox}>
            {datHover && (
              <div className={styles.dotHover}>
                보기 레이아웃, 그룹화 등 편집
              </div>
            )}
          </div>
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
