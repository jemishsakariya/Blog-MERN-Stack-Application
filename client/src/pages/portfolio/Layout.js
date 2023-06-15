import React from "react";
import styles from "./category.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <h1 className={styles.mainTitle}>Our Works</h1>
      <h1 className={styles.cap}>{children}</h1>
    </>
  );
};

export default Layout;
