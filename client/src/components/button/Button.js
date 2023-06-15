import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

const Button = ({ text, url }) => {
  return (
    <Link to={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
