import React from "react";
import { useTranslation } from "react-i18next";
import style from "./ViewAll.module.css";
import Link from 'next/link'
const ViewAll = () => {
  const { t } = useTranslation();
  return (
   <Link href={"/"}>
    <a className={style.viewMore} onClick={() => alert("hi")}>
      {t("viewAll")}
    </a>
   </Link>
  );
};

export default ViewAll;
