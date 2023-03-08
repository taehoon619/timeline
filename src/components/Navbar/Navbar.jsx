import React, { useState } from 'react';
import { CiViewTimeline } from 'react-icons/ci';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import { TbArrowsDiagonal2, TbDots } from 'react-icons/tb';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './Navbar.module.scss';
import useHoverModal from '../../hooks/useHoverModal';
import Search from '../Search/Search';

export default function Navbar() {
  const [
    timeHover,
    arrowHover,
    dotHover,
    timeLineHover,
    menuArrowHover,
    menuDotHover,
    clearTimeHover,
    clearArrowHover,
    clearDotHover,
  ] = useHoverModal();

  const [search, setSearch] = useState(false);

  const onClickSearch = () => {
    setSearch(true);
  };

  const closeBtn = () => {
    setSearch(false);
  };
  console.log(search);
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
        <div className={styles.iconsWrap} onClick={onClickSearch}>
          <AiOutlineSearch className={styles.searchIcon} />
        </div>
        <div className="search_slide">
          {search ? <Search closeBtn={closeBtn} /> : ''}
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
            {dotHover && (
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
