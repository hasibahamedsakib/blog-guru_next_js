import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";
const aboutImg =
  "https://media.istockphoto.com/id/1365105724/photo/multicultural-businesspeople-working-in-an-office-lobby.jpg?s=2048x2048&w=is&k=20&c=iu3fo6GEdNhwibHvD9xxsmSTQm3V9rjAMk9LbeJmlyY=";

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src={aboutImg}
          height={300}
          width={1300}
          alt="about image"
          className={style.aboutImg}
        />
        <div className={style.text}>
          <h3>Digital Storytellers</h3>
          <p>Handcrafting awards wining digital experience</p>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.leftSide}>
          <h2>Who Are We ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias
            minus illo molestias laboriosam.
            <br />
            <br />
            Aliquid enim vel voluptate vero, odit veritatis est? Eum, laborum
            omnis nostrum blanditiis quam repellat excepturi voluptatum! Eos
            animi commodi nobis mollitia facere quasi? Modi, iure.
            <br />
            <br />
            Laudantium omnis, temporibus natus quo perspiciatis commodi eos ad,
            soluta minus ut est neque debitis qui, culpa nihil odit voluptatum!
          </p>
        </div>
        <div className={style.rightSide}>
          <h2>What We Do ?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            enim quia, vel assumenda similique porro numquam nulla cum
            laboriosam maxime tenetur aliquam dicta quod.
          </p>

          <p> - Dynamic Website</p>
          <p> - First And Handy</p>
          <p> - Mobile Apps</p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
