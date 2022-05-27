import style from "./PageCollection.module.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const CollectionInfo = ({data}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);

  return (
    <>
      <div
        className={`d-flex flex-column justify-content-between ${style.info} `}
      >
        <div
          className={`d-flex justify-content-between  ${
            lang.lng === "en" ? "flex-row-reverse" : "flex-row"
          } ${style.collectionName}`}
        >
          <span>{data.title}</span>
          <span>{t("viewAll")} </span>
        </div>
        <p className={style.content}>{data.description}</p>
      </div>
    </>
  );
};

export default CollectionInfo;
