import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
// import blogImg from "../../assets/blogImg.jpg";

const Blog = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/getpost`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    // console.log(result.post);

    setData(result.post);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <Link
            to={`/blog/${item._id}`}
            className={styles.container}
            key={item._id}
          >
            <div className={styles.imageContainer}>
              <img src={`${item.img}`} alt="blogImg" className={styles.img} />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Blog;
