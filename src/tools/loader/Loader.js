import React from "react";
import style from './Loader.module.css'
const Loader = () => {
  return (
    <div className={style.loader}>
      <img src="/Assets/images/loader.gif" />
    </div>
  );
};

export default Loader;
