import React, { useState } from "react";
import styles from "./contact.module.css";
import contactImg from "../../assets/contact.png";

const Contact = () => {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/mail/contactmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError("Something went wrong!");
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={contactImg} alt="contactImg" className={styles.img} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.error}>{error}</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textArea}
            placeholder={"message"}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
