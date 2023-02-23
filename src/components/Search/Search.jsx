import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./Search.module.css";

export default function Search({ search, setSearch }) {
  const onClickCloseBtn = () => {
    setSearch(!search);
  };
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarWrap}>
        <div className={styles.searchBar}>
          <input
            placeholder="검색어를 입력하세요"
            type="text"
            className={styles.search}
          />
          <div
            onClick={onClickCloseBtn}
            className={styles.searchBarIcon}
            // role="button"
          >
            <AiFillCloseCircle className={styles.searchCloseIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
