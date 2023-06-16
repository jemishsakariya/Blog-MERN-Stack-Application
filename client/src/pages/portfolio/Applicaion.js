import React, { useEffect, useState } from "react";
import styles from "./category.module.css";
import { items } from "./data";
import Button from "../../components/button/Button";

const Applicaion = () => {
  const [app, setApp] = useState([]);

  useEffect(() => {
    const getData = () => {
      setApp(items.applications);
    };
    getData();
  }, []);

  return (
    <>
      {app.map((item) => {
        return (
          <div className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button url={"#"} text={"See More"} />
            </div>
            <div className={styles.imgContainer}>
              <img src={item.image} alt="img" className={styles.img} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Applicaion;
