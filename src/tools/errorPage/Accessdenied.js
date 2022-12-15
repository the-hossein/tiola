import React from "react";
import style from "./Error.module.css";
import Image from "next/image";
import error429Img from "../../../public/Assets/images/error429Img.png";
const Accessdenied = () => {
  return (
    <div className={`${style.container429} container`}>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-md-6 col-12">
          <Image src={error429Img} alt="error image" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h1>429</h1>
          <h1>Error</h1>
        </div>
      </div>
    </div>
  );
};

export default Accessdenied;
