import React from "react";
import style from "./UserFactor.module.css";

const FactorSection = ({ title, component }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {component}
    </div>
  );
};

export default FactorSection;
