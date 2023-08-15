import React from "react";
import style from "./page.module.css";
import Link from "next/link";
const PortFolioPage = () => {
  return (
    <div>
      <h3 className={style.subHeading}>Chose a gallery </h3>
      <div className={style.container}>
        <Link href="/portfolio/illustration" className={style.items}>
          <h3>Illustration</h3>
        </Link>
        <Link href="/portfolio/website" className={style.items}>
          <h3>Website</h3>
        </Link>
        <Link href="/portfolio/application" className={style.items}>
          <h3>Application</h3>
        </Link>
      </div>
    </div>
  );
};

export default PortFolioPage;
