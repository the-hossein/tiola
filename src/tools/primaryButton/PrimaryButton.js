import React from "react";
import { useSelector } from "react-redux";
import style from "./PrimaryButton.module.css";
const PrimaryButton = ({ btnText, light, onClick }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <>
      <div
        className={
          light === true
            ? style.lightBtn
            : lang === "fa"
            ? style.primaryBtn
            : style.primaryBtnEn
        }
        onClick={onClick}
      >
        <button>{btnText}</button>
      </div>
    </>
  );
};

export default PrimaryButton;
