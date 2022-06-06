import React from "react";
import style from "./NormalBtn.module.css";
import {  useSelector } from "react-redux";

const NormalBtn = ({ color, text, onClick }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <button
      className={`style.paybtn ${
        color === "red"
          ? lang === "fa"
            ? style.payBtn
            : `${style.payBtnEn} ${style.payBtn}`
          : lang === "fa"
          ? style.addWatch
          : `${style.addWatchEn} ${ style.addWatch}`
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NormalBtn;
