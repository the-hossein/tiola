import React from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useTranslation } from "react-i18next";
import style from "./NotPage.module.css";
import Link from 'next/link'
const NotPage = ({ icon, text, bottonText, bottonLink }) => {
  const { t } = useTranslation();
  return (
    <div className={style.noPage}>
    {icon}
      <p>{text}</p>
      <Link href={bottonLink}>
      
      <button>{bottonText}</button>
      </Link>
    </div>
  );
};

export default NotPage;
