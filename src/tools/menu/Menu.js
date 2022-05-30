import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import style from "./Menu.module.css";
import Link from "next/link";
const Menu = ({ backColor }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);

  return (
    <nav className={style.humbergerMenuNav}>
      <div
        className={`${style.burgerMenu} ${
          lang.lng === "fa" ? `${style.menuRight}` : `${style.menuLeft}`
        } ${backColor === "headerColor" ? style.darkmenu : ""}`}
      >
        <Link href='/profile'>
          <span>Melina Rudigoz</span>
        </Link>
        <ul>
          {/* <Link href="/">
            <li>{t("PurchaseGuide")}</li>
          </Link> */}
          <Link href="/factor">
            <li>{t("MyCart")}</li>
          </Link>
          <Link href="/profile">
            <li>{t("SavedItem")}</li>
          </Link>
          <Link href="/blogs">
            <li>{t("Blog")}</li>
          </Link>
          <Link href="/contactus">
            <li>{t("ContactUs")}</li>
          </Link>
          <Link href="/aboutus">
            <li>{t("AboutUs")}</li>
          </Link>
        </ul>
        <span className={style.sign}>{t("Signout")}</span>
      </div>
    </nav>
  );
};

export default Menu;
