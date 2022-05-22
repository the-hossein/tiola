import React from "react";
import style from "./PrimaryButton.module.css";
const PrimaryButton = ({ btnText, light }) => {
  return (
    <>
      <div className={light===true ? style.lightBtn : style.primaryBtn}>
        <button>{btnText}</button>
      </div>
    </>
  );
};

export default PrimaryButton;
