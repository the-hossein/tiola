import React from "react";
import style from "./NormalBtn.module.css";
const NormalBtn = ({ color, text, onClick }) => {
  const clickHandler = () => {
    onClick();
  };
  return (
    <button
      className={`style.paybtn ${
        color === "red" ? style.payBtn : style.addWatch
      }`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default NormalBtn;