import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import { Noto_Sans_Armenian } from "next/font/google";
const noto = Noto_Sans_Armenian({
  subsets: ["latin"],
});
const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: "/",
      title: "Home",
    },
    {
      id: 2,
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 3,
      path: "/about",
      title: "About",
    },
    {
      id: 4,
      path: "/contact",
      title: "Contact",
    },
    {
      id: 5,
      path: "/blog",
      title: "Blogs",
    },
    {
      id: 6,
      path: "/dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <h3 className={noto.className}>BlogGuru</h3>
      </Link>
      <ul className={style.navLinks}>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
        <button className={style.loginBnt}>Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;
