import React from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import style from "./HeroSection.module.css";
const HeroSection = () => {
    const { t }=useTranslation()
  return (
    <section>
    <div    className={style.heroSection}>
    <img
        src="/Assets/images/5.jpeg"
     
        alt="image"
      />

      <div className={style.descoverMore}>
     <PrimaryButton btnText={t("descoverMore")}/>

      </div>
    </div>
    </section>
  );
};

export default HeroSection;
