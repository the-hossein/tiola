import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import style from "./HeroSection.module.css";
const HeroSection = () => {
    const { t }=useTranslation()
  const lang = useSelector((state) => state.stateLang);

  return (
    <section>
    <div    className={style.heroSection}>
    <img
        src="/Assets/images/5.jpeg"
     
        alt="image"
      />

      <div className={`${style.descoverMore} ${lang.lng==="en"&&style.leftDescoverMore}`}>
     <PrimaryButton btnText={t("descoverMore")}/>

      </div>
    </div>
    </section>
  );
};

export default HeroSection;
