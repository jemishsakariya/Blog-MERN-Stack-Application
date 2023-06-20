import React, { useEffect, useState } from "react";
import styles from "./blogpost.module.css";
// import avatarImg from "../../assets/avatar.jpg";
// import blogImg from "../../assets/blogImg.jpg";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const getData = async () => {
    const res = await fetch(`http://localhost:4000/api/v1/getpost/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    // console.log(result.post);

    setData(result.post);
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.avatarBlock}>
            <div className={styles.author}>
              <img src={data.img} alt="autherImg" className={styles.avatar} />
            </div>
            <span>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.img} alt="img" className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{data.content}</div>
      </div>
    </>
  );
};

export default BlogPost;
