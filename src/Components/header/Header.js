import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/Assets/images/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langActions";
const Header = ({ backColor }) => {
  const { t } = useTranslation();
  const cookie = Cookies.get("i18next");
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const lang = useSelector((state) => state.stateLang);
  const dispatch = useDispatch();
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
    size > 1110
      ? root.style.setProperty("--icon-padding", "0 3rem 0 0")
  
      : root.style.setProperty("--icon-padding", "0 1.5rem 0 0");

    size > 1110
      ? root.style.setProperty("--item-padding", "0 0 0 3rem")
     
      : root.style.setProperty("--item-padding", "0 0 0 1.5rem")
      size < 360
      ? root.style.setProperty("--item-padding", "0 0 0 1rem"):""
  };

  const leftDir = () => {
    root.style.setProperty("--direction", "ltr");
    root.style.setProperty("--marginIcon", "0 1.5rem 0 0");
    root.style.setProperty("--textAlign-right", "right");
    root.style.setProperty("--float-left", "left");
    root.style.setProperty("--icon-padding", "0 0 0 3rem");
    size > 1110
      ? root.style.setProperty("--item-padding", "0 3rem 0 0")
      : root.style.setProperty("--item-padding", "0 1.5rem 0 0")
      size < 360
      ? root.style.setProperty("--item-padding", "0 1rem 0 0"):""

    size > 1110
      ? root.style.setProperty("--icon-padding", "0 0 0 1.5rem")
      : root.style.setProperty("--icon-padding", "0 0 0 1.5rem");
  };
  useEffect(() => {
    dispatch(changeLang(Cookies.get("i18next")));

    const lngCookie=Cookies.get("i18next")
    if (lngCookie === "en") {
      leftDir();
    } else {
      rightDir();
    }
    setpreload(false);
  }, []);
  const changeLng = (lng) => {
    dispatch(changeLang(lng));

    i18next.changeLanguage(lng);
    if (lng === "en") {
      leftDir();
    } else {
      rightDir();
    }
  };
  return !prelaod ? (
    <div className={`${style.header} ${backColor}`}>
      {size > 768 ? (
        <>
          <div className={`${style.headaritem} d-flex align-items-center`}>
            <div
              className={` ${style.allitems} d-flex justify-content-between align-items-center`}
            >
              <FontAwesomeIcon icon={faBars} />
              <span>{t("home")}</span>
              <span>{t("shop")}</span>
              <span>{t("explore")}</span>
              <span>{t("collection")}</span>
            </div>
            <Image src={logo} alt="logo" />
          </div>

          <div className={style.headerIcon}>
            <span>
              {lang.lng === "en" ? (
                <span onClick={() => changeLng("fa")}>fa</span>
              ) : (
                <span onClick={() => changeLng("en")}>en</span>
              )}
            </span>
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
            <span>{t("login")}</span>
          </div>
        </>
      ) : (
        <>
          <div className={` d-flex  align-items-center ${style.mobileIcon}`}>
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
          <div className={` d-flex  align-items-center ${style.mobileLogo}`}>
            <span>{t("descoverMore")}</span>
            <Image src={logo} alt="logo" />
          </div>
        </>
      )}
    </div>
  ) : (
    ""
  );
};

export default Header;
