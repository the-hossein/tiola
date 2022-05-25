import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MyCollection from "./MyCollection";
import style from "./PageCollection.module.css";

const TiolaCollections = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center  ">
          <h1 className={style.title}>{t("collection")}</h1>
          <p className={style.description}>
              {t("testLorem")}
          </p>
          <MyCollection />
          <MyCollection />

          <MyCollection />
          <MyCollection />
          <MyCollection />
          <MyCollection />

          <MyCollection />

          <MyCollection />
          <MyCollection />
          <MyCollection />

          <MyCollection />

          
        </div>
      </div>
    </section>
  );
};

export default TiolaCollections;
