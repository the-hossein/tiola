import React from "react";
import style from "./OurTeam.module.css";
import Image from "next/image";
const Personal = ({ img, name, des }) => {
  return (
    <div className={style.personalStyle}>
      <Image src={img} alt="personalImage" />
      <div className={style.personalDes}>
        <h5>{name}</h5>
        <p className="m-0">{des}</p>
      </div>
    </div>
  );
};

export default Personal;
