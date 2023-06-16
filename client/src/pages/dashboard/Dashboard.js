import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    // console.log(result.products);

    setData(result.products);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
