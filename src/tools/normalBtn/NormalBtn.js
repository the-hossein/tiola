import React from "react";
import style from "./NormalBtn.module.css";
const NormalBtn = ({color,text}) => {
  return <button className={`style.paybtn ${color==="red"?style.payBtn:style.addWatch}`}>{text}</button>;
};

export default NormalBtn;
