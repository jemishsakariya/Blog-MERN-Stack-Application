import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">IdeaLinking</Link>
      <div>
        {links.map((link) => {
          return (
            <Link to={link.url} key={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
