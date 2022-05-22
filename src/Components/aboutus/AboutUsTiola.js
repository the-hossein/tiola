import React from "react";
import { useTranslation } from "react-i18next";
import style from "./AboutUsTiola.module.css";
const AboutUsTiola = () => {
  const { t } = useTranslation();
  return (
    <div className={`container-fluid ${style.tiola}`}>
      <div className="row m-0">
        <div className="col-lg-4">
            {t("aboutUsText")}
        </div>
      </div>
    </div>
  );
};

export default AboutUsTiola;
