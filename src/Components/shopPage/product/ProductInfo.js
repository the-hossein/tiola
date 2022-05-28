import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Product.module.css";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import Link from "next/link";
const ProductInfo = ({ more, data }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);
  console.log(data);
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
            <span>{data.price + t("t")}</span>
            <span className={style.rating}>
              <Rating name="product Rate" value={data.rate} readOnly />
            </span>
            {more ? (
              <Link href={`/product/${data.id}`}>
                <span className={style.moreText}>{t("simpleViewMore")}</span>
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
            <span>{data.title}</span>
            <span>{t("stock") +": "+ data.stock}</span>
            <span>{data.collection.title}</span>
          </div>
        </div>
      </>
    );
  }
};

export default ProductInfo;
