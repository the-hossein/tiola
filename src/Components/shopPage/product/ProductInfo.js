import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import Link from "next/link";
import persianNumber from "../../../tools/persianNumber/persianNumber";
const ProductInfo = ({ more, data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);
  if (typeof data !== "undefined") {
    return (
      <>
        <div
          className={`d-flex justify-content-between ${
            lang.lng === "fa" ? "flex-row-reverse" : "flex-row"
          } ${style.info}`}
        >
          <div
            className={`d-flex flex-column justify-content-between ${
              lang.lng === "fa" && "align-items-end"
            }`}
          >
            <span className={style.priceproduct}>
              {lang.lng === "fa"
                ? persianNumber(data.price) + " " + t("t")
                :  `${data.price} t`}
            </span>
            <span className={style.rating}>
              <Rating name="product Rate" value={data.rate} readOnly />
            </span>
            {more ? (
              <Link href={`/product/${data.id}`}>
                <a className={style.moreText}>{t("simpleViewMore")}</a>
              </Link>
            ) : (
              ""
            )}
          </div>
          <div
            className={`d-flex flex-column ${
              lang.lng === "en" && "align-items-end"
            }`}
          >
            <span>{lang.lng === "fa" ? data.title : data.titleEn}</span>
            <span>{t("stock") + ": " + data.stock}</span>
            <span>
              {lang.lng === "fa"
                ? data.collection.title
                : data.collection.titleEn}
            </span>
          </div>
        </div>
      </>
    );
  }
};

export default ProductInfo;
