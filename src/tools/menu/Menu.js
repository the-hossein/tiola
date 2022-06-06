import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import style from "./Menu.module.css";
import Link from "next/link";
import {
  deleteUserData,
  loginFalse,
  openPopUp
} from "../../redux/register/registerAction";
import { notify } from "../toast/toast";
import { useRouter } from "next/router";
import { deletBasketLength } from "../../redux/factor/factorAction";
// import { useSelector } from "react-redux";
const Menu = ({ backColor }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const register = useSelector((state) => state.stateRegister);

  const dispatch = useDispatch();
  const exitHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(loginFalse());
    if (lang === "fa") {
      var text = "از حساب کاربری خود خارج شدید";
    } else {
      text = "logout of user account";
    }
    notify(text, "success");
    dispatch(deleteUserData());
    dispatch(deletBasketLength());
    // location.reload()
  };
  const goFactorHandler = () => {
    if (!register.loginStatus) {
      dispatch(openPopUp());
    } else {
      router.push({
        pathname: "/factor"
      });
    }
  };

  return (
    <nav className={style.humbergerMenuNav}>
      <div
        className={`${style.burgerMenu} ${
          lang === "fa" ? `${style.menuRight}` : `${style.menuLeft}`
        } ${backColor === "headerColor" ? style.darkmenu : ""}`}
      >
        <Link href="/profile">
          <span>{user.name + " " + user.family}</span>
        </Link>
        <ul>
          {/* <Link href="/">
            <li>{t("PurchaseGuide")}</li>
          </Link> */}
          <li>
            <Link href="/collections">
              <a>{t("collection")}</a>
            </Link>
          </li>
          <li onClick={goFactorHandler}>
            <a>{t("MyCart")}</a>
          </li>
          <li>
            <Link href={register.loginStatus ? "/profile" : "/signin"}>
              <a>{t("SavedItem")}</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>{t("Blog")}</a>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <a>{t("ContactUs")}</a>
            </Link>
          </li>
          <li>
            <Link href="/aboutus">
              <a>{t("AboutUs")}</a>
            </Link>
          </li>
        </ul>
        {register.loginStatus && (
          <span className={style.sign} onClick={exitHandler}>
            {t("Signout")}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Menu;
