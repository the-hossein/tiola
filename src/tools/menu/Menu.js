import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import style from "./Menu.module.css";
const Menu = ({backColor}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);

  return (
    <nav>
      <div className={`${style.burgerMenu} ${lang.lng==="fa"?`${style.menuRight}`:`${style.menuLeft}`} ${backColor==="headerColor"&& style.darkmenu}`}>
        <span>Melina Rudigoz</span>
        <ul>
          <li>{t("PurchaseGuide")}</li>
          <li>{t("MyCart")}</li>
          <li>{t("SavedItem")}</li>
          <li>{t("Blog")}</li>
          <li>{t("ContactUs")}</li>
          <li>{t("AboutUs")}</li>
        </ul>
        <span className={style.sign}>{t("Signout")}</span>
      </div>
    </nav>
  );
};

export default Menu;
