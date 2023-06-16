import React, { useState } from "react";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }

    try {
      const response = await fetch(
        "http://localhost:4000/auth/dashboard/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.ok) {
        // Registration successful
        // Redirect or perform any necessary actions
        navigate("/dashboard/login");
      } else {
        // Registration failed
        setError("Something went wrong!");
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.error}>{error && error}</p>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
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
        <button className={styles.button}>Register</button>
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} to="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
