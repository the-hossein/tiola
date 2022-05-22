import { Rating } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Style from "./Comments.module.css";
const Comment = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={`d-flex flex-column justify-content-between ${Style.Commnet}`}>
        <div className="d-flex justify-content-between">
          <span>Melina Rodiguza</span>
          <span>7/10</span>
        </div>
        <span className={Style.rating}>
          <Rating name="product Rate" value={3} readOnly />
        </span>
        <p className={Style.userComment}>{t("testLorem")}</p>
        <div className={`d-flex justify-content-between  w-100 ${Style.Raiting}`}>
          <ul className="w-100" >
            <li>{t("factor") + " 1"}</li>
            <li>{t("factor") + " 2"}</li>
            <li>{t("factor") + " 3"}</li>
          </ul>
          <ul className="w-100">
            <li style={{ width: "40%" }} className={Style.rate}></li>
            <li style={{ width: "90%" }} className={Style.rate}></li>
            <li style={{ width: "60%" }} className={Style.rate}></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
