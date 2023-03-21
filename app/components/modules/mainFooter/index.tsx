import React from "react";
import Image from "next/image";
import styles from "./mainFooter.module.scss";
const MainFooter = () => {
  return (
    <div className={styles.mainDiv__footer}>
      <ul className={styles.mainDiv__footer__ul}>
        <div className={styles.mainDiv__footer__ul__div__left}>
          <li className={styles.mainDiv__footer__ul__li}>About Us</li>
          <div className={styles.greenButton} />
          <li className={styles.mainDiv__footer__ul__li}>Contact Us</li>
          <div className={styles.greenButton} />
          <li className={styles.mainDiv__footer__ul__li}>FAQ</li>
        </div>
        <li className={styles.mainDiv__footer__ul__li}>
          <div className={styles.mainDiv__footer__ul__li__icon}>
            <Image
              src={"/logo/logo.png"}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </li>
        <div className={styles.mainDiv__footer__ul__div__right}>
          <li className={styles.mainDiv__footer__ul__li}>
            Terms and Conditions
          </li>
          <div className={styles.greenButton} />
          <li className={styles.mainDiv__footer__ul__li}>Privacy Policy</li>
        </div>
      </ul>
    </div>
  );
};

export default MainFooter;
