import Image from "next/image";
import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <p>Footer &copy; all right resurve by hasib ahamed</p>
      <div className={style.social}>
        <Image
          className={style.icon}
          src="/1.png"
          width={15}
          height={15}
          alt="social_image"
        />
        <Image
          className={style.icon}
          src="/2.png"
          width={15}
          height={15}
          alt="social_image"
        />
        <Image
          className={style.icon}
          src="/3.png"
          width={15}
          height={15}
          alt="social_image"
        />
        <Image
          className={style.icon}
          src="/4.png"
          width={15}
          height={15}
          alt="social_image"
        />
      </div>
    </div>
  );
};

export default Footer;
