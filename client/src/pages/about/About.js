import React from "react";
import styles from "./about.module.css";
import aboutImg from "../../assets/aboutImg.jpg";
import Button from "../../components/button/Button";

const About = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={aboutImg} alt="img" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            iure provident repellat tempora voluptate hic optio quisquam? Harum
            architecto perspiciatis accusamus sed quia beatae nam numquam eum
            eos, sapiente, rem illo ex qui. Incidunt soluta aperiam fuga,
            laborum aut velit.
            <br />
            <br />
            Quos laudantium accusamus voluptatibus repudiandae praesentium
            eligendi accusantium quis? Libero quas aut deleniti voluptatibus
            harum accusamus itaque, perferendis, laboriosam perspiciatis
            veritatis, odio cum. Fuga corporis, quod commodi adipisci, impedit
            ipsa nostrum tempora, quisquam sunt pariatur unde? Nostrum unde quam
            omnis?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            dolorum quis dignissimos non vitae libero, veritatis consectetur
            magnam dolor a tempora natus eaque repudiandae suscipit nobis quas
            dicta autem vel. Lorem ipsum dolor sit.
            <br />
            <br />
            - Creative illustration <br /> <br />
            - Dynamic Websites <br /> <br />
            - Fast and Handy
            <br /> <br />
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </>
  );
};

export default About;
