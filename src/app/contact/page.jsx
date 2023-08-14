import React from "react";
import style from "./page.module.css";
import contactImage from "/public/contact.png";
import Image from "next/image";
import Button from "../components/Button/Button";
const ContactPage = () => {
  return (
    <div>
      <h1 className={style.heading}> Let`s Keep in Touch</h1>
      <div className={style.container}>
        <div className={style.contactImg}>
          <Image
            src={contactImage}
            alt="contact image"
            className={style.image}
          />
        </div>
        <div className={style.contactForm}>
          <form className={style.form}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              onResize={false}
            ></textarea>
            <Button url="/contact" text="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
