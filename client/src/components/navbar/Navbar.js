import React, { useState } from "react";
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

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLogout = () => {
    // Perform the logout logic here

    setCookie("isLoggedIn", "", { expires: new Date(0) });

    navigate("/dashboard/login");
  };

  const disableScroll = () => {
    // Get the current page scroll position in the vertical direction
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Get the current page scroll position in the horizontal direction
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  return (
    <>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          IdeaLinking
        </Link>
        <div className={styles.navLink}>
          <DarkModeToggle />
          <div className={styles.links}>
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
        <div className={styles.mobileMenu}>
          <div
            className={
              isNavExpanded ? `${styles.expanded}` : `${styles.notExpanded}`
            }
          >
            <div className={styles.icon}>
              {isNavExpanded ? (
                <div className={styles.menualign} onClick={enableScroll}>
                  <svg
                    fill="#ddd"
                    height="30px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="30px"
                    className={styles.closeButton}
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                    }}
                  >
                    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                  </svg>
                  <div className={styles.menuLinks}>
                    {links.map((link) => {
                      return (
                        <Link
                          to={link.url}
                          key={link.id}
                          className={styles.link}
                          onClick={() => {
                            setIsNavExpanded(false);
                          }}
                        >
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
              ) : (
                <div onClick={disableScroll}>
                  <svg
                    fill="none"
                    height="26"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="26"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                    }}
                  >
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
