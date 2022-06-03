import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import style from "./Menu.module.css";
import Link from "next/link";
import { loginFalse } from "../../redux/register/registerAction";
import { notify } from "../toast/toast";
// import { useSelector } from "react-redux";
const Menu = ({ backColor }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const user = useSelector((state) => state.stateRegister);

  const dispatch=useDispatch()
  const exitHandler=()=>{
  localStorage.removeItem("userToken");
  dispatch(loginFalse())
  if(lang==="fa"){
    var text="از حساب کاربری خود خارج شدید"
  }else{
    text="logout of user account"
  }
  notify(text,"success")
// location.reload()
  }

  const register = useSelector(state=> state.stateRegister);

  return (
    <nav className={style.humbergerMenuNav}>
      <div
        className={`${style.burgerMenu} ${
          lang === "fa" ? `${style.menuRight}` : `${style.menuLeft}`
        } ${backColor === "headerColor" ? style.darkmenu : ""}`}
      >
        <Link href='/profile'>
          <span>{user.name+" "+user.family}</span>
        </Link>
        <ul>
          {/* <Link href="/">
            <li>{t("PurchaseGuide")}</li>
          </Link> */}
              <Link href="/collections">
            <li>{t("collection")}</li>
          </Link>
          <Link href="/factor">
            <li>{t("MyCart")}</li>
          </Link>
          <Link href={register.loginStatus ? '/profile' : '/signin'}>
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
        <span className={style.sign} onClick={exitHandler}>{t("Signout")}</span>
      </div>
    </nav>
  );
};

export default Menu;
