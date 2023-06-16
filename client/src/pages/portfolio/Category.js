import React from "react";
import styles from "./category.module.css";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

import Applicaion from "./Applicaion";
import Website from "./Website";
import Illustrations from "./Illustrations";

const Category = () => {
  const { id } = useParams();

  return (
    <>
      <div className={styles.container}>
        <Layout children={id} />
        {id === "application" ? <Applicaion /> : ""}
        {id === "websites" ? <Website /> : ""}
        {id === "illustations" ? <Illustrations /> : ""}
      </div>
    </>
  );
};

export default Category;
