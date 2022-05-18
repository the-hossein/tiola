import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/Assets/images/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
const Header = ({ backColor }) => {
  const { t } = useTranslation();
  const cookie = Cookies.get("i18next");

  const [lang, setlang] = useState();
  const [prelaod, setpreload] = useState(true);
  const [showSearchBox, setShowSearchBox] = useState(false);
  if (typeof window !== "undefined") {
    var root = document.documentElement;
  }
  const serachHandler = () => {
    setShowSearchBox(!showSearchBox);
  };
  const rightDir = () => {
    root.style.setProperty("--direction", "rtl");
    root.style.setProperty("--marginIcon", "0 0 0 1.5rem");
    root.style.setProperty("--textAlign-right", "left");
    root.style.setProperty("--float-left", "right");
  };

  const leftDir = () => {
    root.style.setProperty("--direction", "ltr");
    root.style.setProperty("--marginIcon", "0 1.5rem 0 0");
    root.style.setProperty("--textAlign-right", "right");
    root.style.setProperty("--float-left", "left");
  };
  useEffect(() => {
    setlang(Cookies.get("i18next"));
    if (cookie === "en") {
      leftDir();
    } else {
      rightDir();
    }
    setpreload(false);
  }, []);
  const changeLng = (lng) => {
    setlang(lng);

    i18next.changeLanguage(lng);
    if (lng === "en") {
      leftDir();
    } else {
      rightDir();
    }
  };
  return !prelaod ? (
    <div className={`${style.headerContainer} ${backColor}`}>
      <div className={`${style.menuIcon} d-flex justify-content-between`}>
        <div className="d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faBars} />
          <span>{t("login")}</span>
          <div className="position-relative">
            <input
              className={showSearchBox ? style.searchBox : style.inputDesign}
            />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={serachHandler}
              className={showSearchBox ? style.searchBoxIcon : ""}
            />
          </div>
        </div>

        {lang === "en" ? (
          <span onClick={() => changeLng("fa")}>fa</span>
        ) : (
          <span onClick={() => changeLng("en")}>en</span>
        )}
      </div>
      <div className={style.logo}></div>
      <div className={`${style.menuItem} d-flex justify-content-between`}>
        <Image src={logo} alt="logo" />
        <div
          className={` ${style.items} d-flex justify-content-between align-items-center`}
        >
          <span>{t("home")}</span>
          <span>{t("shop")}</span>
          <span>{t("explore")}</span>
          <span>{t("collection")}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Header;
