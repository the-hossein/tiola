import React from "react";
import style from "./PrimaryButton.module.css";
const PrimaryButton = ({ btnText, light ,onClick}) => {
  return (
    <>
      <div className={light===true ? style.lightBtn : style.primaryBtn} onClick={onClick}>
        <button>{btnText}</button>
      </div>
    </>
  );
};

export default PrimaryButton;
