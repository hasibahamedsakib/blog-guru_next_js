"use client";
import React, { useContext } from "react";
import style from "./DarkModeToggle.module.css";
import { ThemeContext } from "@/app/Context/DarkMode";

const DarkModeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>🌙</div>
      <div className={style.icon}>🔆</div>
      <div
        className={style.ball}
        style={theme === "dark" ? { right: "2px" } : { left: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
