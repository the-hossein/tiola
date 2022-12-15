import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chngeRate } from "../../redux/rate/rateActions";
const RateSlider = ({ name }) => {
  const state = useSelector((state) => state.stateRate);
  const dispatch = useDispatch();
  const changedRate = (e) => {
    dispatch(chngeRate(e.target.name, e.target.value));
  };
 
  return (
    <Slider
      name={name}
      size="small"
      defaultValue={5}
      aria-label="Small"
      valueLabelDisplay="auto"
      max={10}
      min={0}
      onChange={changedRate}
    />
  );
};

export default RateSlider;
