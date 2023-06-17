import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmodeToggle/DarkModeToggle";
import { useCookies } from "react-cookie";

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
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies([]);

  const handleLogout = () => {
    // Perform the logout logic here

    setCookie("isLoggedIn", "", { expires: new Date(0) });
    window.location.reload();

    navigate("/dashboard/login");
  };

  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          IdeaLinking
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => {
            return (
              <Link to={link.url} key={link.id} className={styles.link}>
                {link.title}
              </Link>
            );
          })}
          {document.cookie === "isLoggedIn=true" ? (
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className={styles.logout}
              onClick={() => {
                navigate("/dashboard/login");
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
