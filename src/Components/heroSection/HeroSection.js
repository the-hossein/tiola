import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import style from "./HeroSection.module.css";
import Link from "next/link";
const HeroSection = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);

  return (
    <section>
      <div className={style.heroSection}>
        {/* <img src="/Assets/images/5.jpeg" alt="image" /> */}
        <video  autoPlay playsInline muted preload="true" loop >
          <source src="/Assets/images/tiola-banner.mp4" type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg"> */}
          Your browser does not support the video tag.
        </video>

        <div
          className={`${style.descoverMore} ${
            lang.lng === "en" && style.leftDescoverMore
          }`}
        >
          <Link href="/shop">
            {/* add a new props for PrimaryButton for value bottom */}
            <div>
              <PrimaryButton btnText={t("descoverMore")} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
