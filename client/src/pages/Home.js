import React from "react";
import styles from "./home.module.css";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality.We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <img src={hero} alt="imgHero" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
