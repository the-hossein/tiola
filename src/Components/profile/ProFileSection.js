import React from "react";
import { useTranslation } from "react-i18next";
import style from "./UserProfile.module.css";

const ProFileSection = () => {
  const { t } = useTranslation();
  return (
    <div className={style.profile}>
      <img src="/Assets/images/1.jpeg" alt="user profile image" />
      <div>
        <h1 className={style.name}>Melina Rodiguz</h1>
        <span className={style.editPro}>{t("editProfile")}</span>
        <span className="d-block">20%{t("remain")}</span>
      </div>
    </div>
  );
};

export default ProFileSection;
