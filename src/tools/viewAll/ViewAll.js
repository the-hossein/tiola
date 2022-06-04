import React from "react";
import { useTranslation } from "react-i18next";
import style from "./ViewAll.module.css";
import Link from 'next/link'
const ViewAll = ({content, linked}) => {
  const { t } = useTranslation();
  return (
   <Link href={linked}>
    <a className={style.viewMore}>
      {content}
    </a>
   </Link>
  );
};

export default ViewAll;
