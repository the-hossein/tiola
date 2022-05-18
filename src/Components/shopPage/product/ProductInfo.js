import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
const ProductInfo = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);
  return (
    <>
      <div
        className={`d-flex justify-content-between ${lang.lng === "fa" ? "flex-row-reverse" : "flex-row"} ${style.info}`}>
        <div className={`d-flex flex-column ${lang.lng === "fa" && "align-items-end"}`}>
          <span>{`250,000` + t("t")}</span>
          <span className={style.rating}>
            <Rating name="product Rate" value={3} readOnly />
          </span>
          <span>{t("simpleViewMore")}</span>
        </div>

        <div className={`d-flex flex-column ${ lang.lng === "en" && "align-items-end"}`}>
          <span>{t("scarf") + `No1`}</span>
          <span>{t("code") + `1107`}</span>
          <span>{t("BlueOcean")}</span>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
