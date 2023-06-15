import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          IdeaLinking
        </Link>
        <div className={styles.links}>
          {links.map((link) => {
            return (
              <Link to={link.url} key={link.id} className={styles.link}>
                {link.title}
              </Link>
            );
          })}
          <button className={styles.logout} onClick={() => {}}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
