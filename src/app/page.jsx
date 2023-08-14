import React from "react";
import style from "./page.module.css";
import heroImg from "/public/hero.png";
import Image from "next/image";
import Button from "./components/Button/Button";
const page = () => {
  return (
    <div className={style.home_container}>
      <div className={style.home_text}>
        <h1>Batter Design for your digital products </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt
          unde ex animi, rem aliquid?
        </p>
        <Button text="See Our work" url="/portfolio" />
      </div>
      <div className={style.home_image}>
        <Image src={heroImg} alt="hero image" className={style.home_img} />
      </div>
    </div>
  );
};

export default page;
