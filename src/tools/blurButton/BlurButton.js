import React from "react";
import style from "./BlurButton.module.css";
import { useSelector } from "react-redux";
const BlurButton = ({ btnText }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <>
      <div className={lang === "fa" ? style.blurButton : style.blurButtonEn}>
        <button>{btnText}</button>
      </div>
    </>
  );
};

export default BlurButton;
