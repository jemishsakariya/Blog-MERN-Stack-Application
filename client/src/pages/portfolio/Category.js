import React from "react";
import styles from "./category.module.css";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import creativePortfolio from "../../assets/creativePortfolio.jpg";

const Category = () => {
  const { id } = useParams();
  return (
    <>
      <div className={styles.container}>
        <Layout children={id} />
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={creativePortfolio} alt="img" className={styles.img} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={creativePortfolio} alt="img" className={styles.img} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={creativePortfolio} alt="img" className={styles.img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
