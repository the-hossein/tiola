import React from "react";
import { useTranslation } from "react-i18next";
import style from "./AboutUsTiola.module.css";

const AboutUsTiola = () => {
  const { t } = useTranslation();
  return (
    <div className={`container-fluid d-relative ${style.tiola}`}>
      <div className={`row m-0`}>
        <div className="col-lg-5 col-12">
            <p className="text-justify">
              {t("aboutUsText")}
            </p>
        </div>
        <div className={style.pic}></div>
      </div>
    </div>
  );
};

export default AboutUsTiola;
