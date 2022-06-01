import React from "react";
import { useSelector } from "react-redux";
import style from "./ScreenLoader.module.css";
const ScreenLoader = () => {
  const state = useSelector((state) => state.stateScreenLoader);
  console.log(state);
  return (
    state.loadingScreen && (
      <div className={style.screenLoader}>
        <img src="/Assets/images/loader.gif" />
      </div>
    )
  );
};

export default ScreenLoader;
