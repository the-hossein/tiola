import React from "react";
import style from "./SecondlyButton.module.css";
const SecondlyButton = ({text}) => {
  return <>
  <button className={style.secondlyBtn}>{text}</button>
  </>;
};

export default SecondlyButton;
