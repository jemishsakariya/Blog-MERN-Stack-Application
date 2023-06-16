import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";
// import blogImg from "../../assets/blogImg.jpg";

const Blog = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    // console.log(result.products);

    setData(result.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <Link
            to={`/blog/${item.id}`}
            className={styles.container}
            key={item.id}
          >
            <div className={styles.imageContainer}>
              <img
                src={`${item.images[0]}`}
                alt="blogImg"
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.description}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Blog;
