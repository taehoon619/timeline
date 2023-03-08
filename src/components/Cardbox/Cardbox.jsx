import React from "react";
import styles from "./Cardbox.module.scss";

export default function Cardbox() {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.cardLineWrap}>
        <div className={styles.cardLineBoxLeft}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
        <div className={styles.cardLineBoxRight}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
      </div>
      <div className={styles.cardSectionWrap}>
        <div className={styles.cardSection}>
          <div className={styles.cardLink}>
            <div className={styles.cardText}></div>
          </div>
          <div className={styles.cardGap}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.whole}></div>
        </div>
        <div className={styles.cardLineTextWrap}>
          <div className={styles.cardLineTextBox}>
            <div className={styles.cardLineText}>
              <div className={styles.cardText}>카드 1</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardLineWrap}>
        <div className={styles.cardLineBoxLeft}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
        <div className={styles.cardLineBoxRight}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
      </div>
      <div className={styles.cardSectionWrap}>
        <div className={styles.cardSection}>
          <div className={styles.cardLink}>
            <div className={styles.cardText}></div>
          </div>
          <div className={styles.cardGap}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.whole}></div>
        </div>
        <div className={styles.cardLineTextWrap}>
          <div className={styles.cardLineTextBox}>
            <div className={styles.cardLineText}>
              <div className={styles.cardText}>카드 2</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardLineWrap}>
        <div className={styles.cardLineBoxLeft}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
        <div className={styles.cardLineBoxRight}>
          <div className={styles.cardLine}>
            <div className={styles.cardPoint}></div>
          </div>
        </div>
      </div>
      <div className={styles.cardSectionWrap}>
        <div className={styles.cardSection}>
          <div className={styles.cardLink}>
            <div className={styles.cardText}></div>
          </div>
          <div className={styles.cardGap}></div>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.whole}></div>
        </div>
        <div className={styles.cardLineTextWrap}>
          <div className={styles.cardLineTextBox}>
            <div className={styles.cardLineText}>
              <div className={styles.cardText}>카드 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
