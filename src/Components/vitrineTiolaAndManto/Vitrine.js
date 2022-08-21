import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Vitrine.module.css";

//icons
import scarfIcon from "../../../public/Assets/images/vitrine/Vector_scarf.png";
import mantoIcon from "../../../public/Assets/images/vitrine/Vector_manto.png";
import EnFlag from "../../../public/Assets/images/vitrine/uk.png";
import FaFlag from "../../../public/Assets/images/vitrine/ir.png";

import tiolaLogo from "../../../public/Assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/lang/langActions";
import i18next from "i18next";

const Vitrine = ({ show }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const dispatch = useDispatch();

  const changLang = (lng) => {
    dispatch(changeLang(lng));
    i18next.changeLanguage(lng);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <ul className={styles.listNav}>
          <li>
            <Link href={"/shop"}>
              <a>{t("shop")}</a>
            </Link>
          </li>
          <li>
            <Link href={"/explore"}>
              <a>{t("explore")}</a>
            </Link>
          </li>
          <li>
            <Link href={"/collections"}>
              <a>{t("collection")}</a>
            </Link>
          </li>
        </ul>
        <Image src={tiolaLogo} alt={"logo"} />
      </div>
      <div className={styles.selectLang}>
        <div className={lang === "fa" ?  styles.text_holder  : styles.text_holderEn}>
          {lang === "fa" ? (
            <span
              className={styles.lang_target}
              onClick={() => changLang("en")}
            >
              En
              <Image src={EnFlag} alt="En"  />
            </span>
          ) : (
            <span
              className={styles.lang_target}
              onClick={() => changLang("fa")}
            >
              fa
              <Image src={FaFlag} alt="Fa" />
            </span>
          )}
        </div>
      </div>
      <div className={styles.child}>
        <div className={`${styles.manto}`} onClick={() => show(2)}>
          <div className={styles.vector}>
            <Image src={mantoIcon} alt="MantoShop" />
            <p>مزون</p>
          </div>
        </div>
      </div>
      <div className={`${styles.child}`}>
        <video autoPlay playsInline muted preload="true" loop>
          <source
            src="Assets/images/vitrine/intro.mp4"
            type="video/mp4"
            Accept-Ranges="bytes"
          />
          {/* <source src="movie.ogg" type="video/ogg"> */}
        </video>
      </div>
      <div className={styles.child}>
        <div
          className={`${styles.child} ${styles.tiola}`}
          onClick={() => show(1)}
        >
          <div className={styles.vector}>
            <Image src={scarfIcon} alt="MantoShop" />
            <p>شال و روسری</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vitrine;
