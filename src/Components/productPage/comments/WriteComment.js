import { t } from "i18next";
import React from "react";
import Style from "./Comments.module.css";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import RateSlider from "../../../tools/rateSlider/RateSlider";
import { useDispatch, useSelector } from "react-redux";
import { writeFalse } from "../../../redux/comment/commentActions";
import { resetRate } from "../../../redux/rate/rateActions";

const WriteComment = () => {
  const state = useSelector((state) => state.stateRate);
  const dispatch = useDispatch();
  const doneHandler = () => {
    dispatch(writeFalse());
    dispatch(resetRate());
  };
  return (
    <div
      className={`d-flex flex-column justify-content-between ${Style.writeCm}`}
    >
      <span>Melina Rodrigoz</span>
      <div className={`form-floating ${Style.commentText}`}>
        <textarea
          type="text"
          className="form-control"
          id="floatingInputGrid"
          placeholder={t("writeYourCm")}
        />
        <label to="floatingInputGrid">{t("writeYourCm")}</label>
      </div>
      <div
        className={`row mt-3 `}
      >
        
          <div className={
            `col-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center justify-content-around ${Style.ratinaition}`}
            >
                <ul className={Style.factorLi}>
                  <li>{t("factor") + " 1"}</li>
                  <li>{t("factor") + " 2"}</li>
                  <li>{t("factor") + " 3"}</li>
                </ul>
              
                  <Box width="60%" paddingX={1} className={Style.myBox} >
                    <ul>
                      <li>
                        <RateSlider name="factor1"/>
                        <span className={Style.amount}>{state.factor1}</span>
                      </li>
                      <li>
                        <RateSlider name="factor2" />

                        <span className={Style.amount}>{state.factor2}</span>
                      </li>
                      <li>
                        <RateSlider name="factor3" />

                        <span className={Style.amount}>{state.factor3}</span>
                      </li>
                    </ul>
                  </Box>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 d-flex align-items-center justify-content-center">
            <Box paddingX={2} className={Style.myBox}>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <span className={Style.total}>{t("total")}</span>
                    <span className={Style.rating}>
                      <Rating
                        name="product Rate"
                        value={(state.factor1 + state.factor2 + state.factor3) / 6}
                        readOnly
                      />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <button className={Style.doneBtn} onClick={doneHandler}>
                    {t("done")}
                  </button>
                </div>
              </div>
            </Box>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default WriteComment;
