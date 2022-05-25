import React from "react";
import { useTranslation } from "react-i18next";
import style from './ViewAll.module.css'
const ViewAll = () => {
    const { t }=useTranslation()
  return <span className={style.viewMore}>{t("viewAll")}</span>;
};

export default ViewAll;
