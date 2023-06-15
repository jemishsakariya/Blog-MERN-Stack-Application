import React from "react";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blogImg.jpg";

const Blog = () => {
  return (
    <>
      <Link to={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={blogImg} alt="blogImg" className={styles.img} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link to={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={blogImg} alt="blogImg" className={styles.img} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link to={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={blogImg} alt="blogImg" className={styles.img} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </>
  );
};

export default Blog;
