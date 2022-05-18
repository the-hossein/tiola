import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Style from "./ProductSlider.module.css";

export const SamplePrevArrow = ({ style,className, onClick }) => {
  return (
    <>
  <span
        className={className}
        onClick={onClick}
        style={{...style}}
      >
        <FontAwesomeIcon icon={faAngleLeft} className={Style.arrow} />
      </span>
    </>
  );
};
