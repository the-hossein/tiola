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
const Menu = ({ backColor, show, setLang }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);
  const register = useSelector((state) => state.stateRegister);

  const dispatch = useDispatch();
  const exitHandler = () => {
    localStorage.removeItem("userToken");
    dispatch(loginFalse());
    router.push({
      pathname: "/"
    });
    if (lang === "fa") {
      var text = "از حساب کاربری خود خارج شدید";
    } else {
      text = "logout of user account";
    }
    notify(text, "success");
    dispatch(deleteUserData());
    dispatch(deletBasketLength());
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
        className={`${style.burgerMenu} ${show && style.showItem} 
        ${lang === "fa" ? style.menuRight : style.menuLeft} 
        ${backColor === "headerColor" ? style.darkmenu : ""} `}
      >
        <div className="d-flex justify-content-between">
          <Link href="/profile">
            <span className={style.userName}>{user.name + " " + user.family}</span>
          </Link>
          {
            !!setLang && <a className={style.setLng}>
            {lang === "en" ? (
              <span onClick={() => setLang("fa")}>fa</span>
            ) : (
              <span onClick={() => setLang("en")}>en</span>
            )}
          </a>
          }
        </div>
        <ul>
          {
            !!setLang && <><li>
            <Link href="/collections">
              <a>{t("collection")}</a>
            </Link>
          </li> 
          <li>
            <Link href="/shop">
              <a>{t("shop")}</a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>{t("explore")}</a>
            </Link>
          </li>
          </>
          }
          
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
