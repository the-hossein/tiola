import React from "react";
import style from "./SecondlyButton.module.css";
const SecondlyButton = ({ text, onclick }) => {
  return (
    <>
      <button className={style.secondlyBtn} onClick={onclick}>
        {text}
      </button>
    </>
  );
};

export default SecondlyButton;
