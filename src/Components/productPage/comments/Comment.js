import { Rating } from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import Style from "./Comments.module.css";
const Comment = ({userName, score, commentText}) => {
  const { t } = useTranslation();
  const num1 = Math.floor(Math.random() * 3);
  const num2 = Math.floor(Math.random() * 3);
  const num3 = Math.floor(Math.random() * 3);


  return (
    <>
      <div className={`d-flex flex-column justify-content-between ${Style.Commnet}`}>
        <div className="d-flex justify-content-between">
          <span>{userName}</span>
          <span>{score*2}/10</span>
        </div>
        <span className={Style.rating}>
          <Rating name="product Rate" value={score} readOnly />
        </span>
        <p className={Style.userComment}>{commentText ? commentText : t("testLorem")}</p>
        <div className={`d-flex justify-content-between  w-100 ${Style.Raiting}`}>
          <ul className="w-100" >
            <li>{t("factor") + " 1"}</li>
            <li>{t("factor") + " 2"}</li>
            <li>{t("factor") + " 3"}</li>
          </ul>
          <ul className="w-100">
            <li style={{width: `${score * 2 *  10 }% `}} className={Style.rate}></li>
            <li style={{ width: `${score * 2 *  10 }% ` }} className={Style.rate}></li>
            <li style={{ width: `${score * 2 *  10 }% ` }} className={Style.rate}></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
