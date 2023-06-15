import React from "react";
import styles from "./blogpost.module.css";
import avatarImg from "../../assets/avatar.jpg";
import blogImg from "../../assets/blogImg.jpg";

const BlogPost = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            magnam veritatis accusantium. Repellendus odit consequatur quaerat
            rerum magni a maiores. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>
          <div className={styles.author}>
            <img src={avatarImg} alt="autherImg" className={styles.avatar} />
            <span>
              Roronoa <span> Zoro</span>
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={blogImg} alt="img" className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          perferendis architecto odit ipsum officia dolorum. Eum repellendus
          tempore, nesciunt illo ipsa iste? Ut totam perspiciatis iure eos
          aperiam doloribus nobis. Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Id, ex.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet velit
          similique ipsa quasi! Sapiente amet consectetur id soluta, cumque est
          repudiandae vero ab itaque commodi explicabo nihil a, doloribus velit
          aut nisi vitae.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
          in dolor. Ut voluptas illo ea animi in molestiae culpa. Nihil quaerat
          magnam nesciunt labore, ab deleniti? Voluptatibus perferendis dolor
          accusamus minima distinctio amet cupiditate maiores accusantium illum
          culpa ut, odit a. Aperiam repellat ut et voluptate atque. Dolore
          facere delectus iste sequi ducimus. Nisi sit a odio laudantium, amet
          natus?
        </p>
      </div>
    </>
  );
};

export default BlogPost;
