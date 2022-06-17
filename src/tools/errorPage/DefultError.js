import Image from "next/image";
import React from "react";
import img from "../../../public/Assets/images/callImg.png";
import style from "./Error.module.css";

const DefultError = () => {
  return (
    <div className={style.defultErrorConteiner}>
      <div className={style.defultError}>
        <Image src={img} alt="image" />
        <div>
          <p>Somthing Wrong</p>
          <p> Call Us</p>
          <a className={style.errorBtn} href="tel:02191690818">
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default DefultError;
