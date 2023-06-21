import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { useCookies } from "react-cookie";
import { BASE_URL } from "../../../utils/config";

const Login = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const [cookies, setCookie] = useCookies([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await fetch(`${BASE_URL}/auth/dashboard/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful

        setCookie("isLoggedIn", "true");

        setSuccess("Login successful!");
        navigate("/dashboard");
      } else {
        // Login failed
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.error}>{error && error}</p>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} to="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
};

export default Login;
