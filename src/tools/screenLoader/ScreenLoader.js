import React from "react";
import { useSelector } from "react-redux";
import style from "./ScreenLoader.module.css";
const ScreenLoader = () => {
  const state = useSelector((state) => state.stateScreenLoader);
  return (
    // state.loadingScreen && (
      <div className={style.loading_gif}>
        {/*   <img src={gif} alt="loading" /> */}
        <img src="/Assets/images/loader.gif" />
      </div>
    // )
  );
};

export default ScreenLoader;
