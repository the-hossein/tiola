import Image from "next/image";
import React from "react";
import style from "./Error.module.css";
const ErrorCm = ({ img, txt }) => {
  return (
    <div className={`container ${style.ErrorCm}`}>
      <div className="row justify-content-center">
        <div className="col-12">
          <Image src={img} alt="error image" />
        </div>
        <div className="col-12">
          <p>{txt}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorCm;
