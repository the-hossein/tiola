import React from "react";
import style from "../UserFactor.module.css";

const EditBtn = ({ onclick,text }) => {
  return (
    <div className={style.edit} onClick={onclick}>
      {text}
    </div>
  );
};

export default EditBtn;
