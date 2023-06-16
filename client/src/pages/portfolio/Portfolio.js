import React from "react";
import styles from "./portfolio.module.css";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>
        <Layout />
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <div className={styles.items}>
          <Link to={"./illustations"} className={styles.item}>
            <span className={styles.title}>Illustrations</span>
          </Link>
          <Link to={"./websites"} className={styles.item}>
            <span className={styles.title}>Websites</span>
          </Link>
          <Link to={"./application"} className={styles.item}>
            <span className={styles.title}>Application</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
