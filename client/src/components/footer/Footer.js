import React from "react";
import styles from "./footer.module.css";
import facebook from "../../assets/1.png";
import instagram from "../../assets/2.png";
import twitter from "../../assets/3.png";
import Youtube from "../../assets/4.png";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div>@2023 IdeaLinking. All rights reserved.</div>
        <div className={styles.social}>
          <img src={facebook} className={styles.icon} alt="Facebook" />
          <img src={instagram} className={styles.icon} alt="Instagram" />
          <img src={twitter} className={styles.icon} alt="twitter" />
          <img src={Youtube} className={styles.icon} alt="Youtube" />
        </div>
      </div>
    </>
  );
};

export default Footer;
