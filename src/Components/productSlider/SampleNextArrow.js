import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Style from "./ProductSlider.module.css";

export const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <>
      <span
        className={className}
        onClick={onClick}
        style={{...style}}
      >
        <FontAwesomeIcon icon={faAngleRight} className={Style.arrow} />
      </span>
    </>
  );
};
