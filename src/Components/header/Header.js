import React, { useEffect, useLayoutEffect, useState } from "react";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/Assets/images/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langActions";
import Menu from "../../tools/menu/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  getProfile,
  loginFalse,
  loginTrue,
  openPopUp
} from "../../redux/register/registerAction";
import { query } from "../../redux/searchProduct/searchAction";
import { notify } from "../../tools/toast/toast";

import { fetchProducts } from "../../redux/getallproducts/allProductsAction";
import {
  deleteFactor,
  getBasketDetails
} from "../../redux/factor/factorAction";
const Header = ({ backColor }) => {
  const router = useRouter();
  // const { key:`${textSearch}`,  pid: "abc" } = router.query;
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);
  const state = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateFactor);

  const [cookieLS, setCookieLs] = useState();
  const [errorShow, setErrorShow] = useState(true);
  const [menuBar, setMenuBar] = useState(false);
  const [size, setSize] = useState([0]);
  const [boxTarget, setBoxTarget] = useState(false);
  const searchingTarget = useSelector((state) => state.stateSearch.items);
  let targetSearch = [];
  //call state allProducts
  const allProducts = useSelector((state) => state.stateAllProducts.data);
  // for get text search clint
  // const {targetSearch, setTargetSearch} = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const searchHandler = (event) => {
    setTextSearch(event.target.value);
    setBoxTarget(true);
    // const setSuggest = async () => {
    //   const resolve = await allProducts.data.filter(item => item.title.includes(textSearch))
    //   return setTargetSearch(resolve)
    // }
    // setSuggest();
    targetSearch = allProducts.filter((item) =>
      item.title.includes(textSearch)
    );
    dispatch(query(targetSearch));
  };

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const dispatch = useDispatch();
  const [prelaod, setpreload] = useState(true);
  const [showSearchBox, setShowSearchBox] = useState(false);
  if (typeof window !== "undefined") {
    var root = document.documentElement;
    var ls = localStorage.getItem("userToken");
  }
  const serachHandler = () => {
    setShowSearchBox(!showSearchBox);
    setBoxTarget(false);
  };
  const inspect = () => {
    document.addEventListener(
      "keydown",
      function (event) {
        console.log(event.ctrlKey);
        if (event.keyCode == 123) {
          return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
          return false;
        } else if (event.ctrlKey && event.keyCode === 85) {
          return false;
        }
      },
      false
    );
  };
  const rightDir = () => {
    root.style.setProperty("--direction", "rtl");
    root.style.setProperty("--directionR", "ltr");

    root.style.setProperty("--marginIcon", "0 0 0 1.5rem");
    root.style.setProperty("--textAlign-right", "left");
    root.style.setProperty("--float-left", "right");
    root.style.setProperty("--font", "IRANSansWeb");
    root.style.setProperty("--verySmall-font", "7pt");

    root.style.setProperty("--sm-font", "9pt");
    root.style.setProperty("--xs-font", "10pt");
    root.style.setProperty("--md-font", "11pt");
    root.style.setProperty("--lg-font", "14pt");
    root.style.setProperty("--xl-font", "16pt");
    root.style.setProperty("--xxl-font", "21pt");
    root.style.setProperty("--oxx-font", "26pt");
    root.style.setProperty("--veryLg-font", "30pt");
    root.style.setProperty("--veryLg2-font", "40pt");

    root.style.setProperty("--hamberMenu-translate", "translateY(50%)");
  };

  const leftDir = () => {
    root.style.setProperty("--direction", "ltr");
    root.style.setProperty("--directionR", "rtl");

    root.style.setProperty("--marginIcon", "0 1.5rem 0 0");
    root.style.setProperty("--textAlign-right", "right");
    root.style.setProperty("--float-left", "left");
    root.style.setProperty("--font", "apple");
    root.style.setProperty("--verySmall-font", "10pt");
    root.style.setProperty("--sm-font", "11pt");
    root.style.setProperty("--xs-font", "12pt");
    root.style.setProperty("--md-font", "15pt");
    root.style.setProperty("--lg-font", "18pt");
    root.style.setProperty("--xl-font", "24pt");
    root.style.setProperty("--xxl-font", "30pt");
    root.style.setProperty("--oxx-font", "34pt");
    root.style.setProperty("--veryLg-font", "48pt");
    root.style.setProperty("--veryLg2-font", "56pt");

    root.style.setProperty("--hamberMenu-translate", "translateY(50%)");
  };

  useEffect(() => {
    if (ls !== null) {
      const userToken = JSON.parse(ls);
      const tokenExp = userToken.exp;
      const token = userToken.token;
      const phone = userToken.phone;

      const getApi = async () => {
        dispatch(await getProfile());
        // if (state.basket !== "") {
        //   dispatch(await getBasketDetails(state.basketid));
        // }
      };

      getApi();

      const now = new Date();
      const endDate = new Date(tokenExp);
      if (endDate - now < 0) {
        localStorage.removeItem("userToken");
        dispatch(loginFalse());
      }
    } else {
      dispatch(loginFalse());
    }
  }, [state.loginStatus]);
  useEffect(() => {
    dispatch(getBasketDetails(state.basketid));
  }, [state.basketid]);
  useEffect(() => {
    if (basket.checkout === true) {
      window.location.reload();
    }
    targetSearch = allProducts.filter((item) => item.title.includes(""));
    dispatch(changeLang(Cookies.get("i18next")));
    if(!allProducts.length){
      dispatch(fetchProducts());
    }
    const lngCookie = Cookies.get("i18next");
    if (lngCookie === undefined) {
      dispatch(changeLang("fa"));
      i18next.changeLanguage("fa");
      rightDir();
    }
    setCookieLs(lngCookie);
    if (lngCookie === "en") {
      dispatch(changeLang("en"));
      i18next.changeLanguage("en");
      leftDir();
    } else {
      dispatch(changeLang("fa"));
      i18next.changeLanguage("fa");
      rightDir();
    }
    setpreload(false);

    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://www.googletagmanager.com/gtag/js?id=G-CC43D5C3Q6";
      s.async = 1;
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-CC43D5C3Q6");
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
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
  const openMenu = () => {
    setMenuBar(!menuBar);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMenuBar(false);
    });
  }, [menuBar]);
  const goFactorHandler = () => {
    if (!state.loginStatus) {
      dispatch(openPopUp());
    } else {
      router.push({
        pathname: "/factor"
      });
    }
  };

  return !prelaod ? (
    <>
      <div className={`${style.header} ${backColor}`} onKeyDown={inspect}>
        {size > 768 ? (
          <>
            <div className={`${style.headaritem} d-flex align-items-center`}>
              <nav
                className={` ${style.allitems} d-flex justify-content-between align-items-center`}
              >
                <MenuIcon
                  sx={{ fontSize: 20, position: "relative" }}
                  onClick={openMenu}
                />

                {/* <FontAwesomeIcon
                  icon={faBars}
                  className="position-relative"
                  onClick={openMenu}
                /> */}
                {menuBar && <Menu backColor={backColor} show={menuBar} />}
                <div>
                  <Link href="/">
                    <a className={router.pathname === "/" ? style.active : ""}>
                      {t("home")}
                    </a>
                  </Link>
                  <Link href="/shop">
                    <a
                      className={
                        router.pathname === "/shop" ? style.active : ""
                      }
                    >
                      {t("shop")}
                    </a>
                  </Link>
                  <Link href="/explore">
                    <a className={router.pathname === "#" ? style.active : ""}>
                      {t("explore")}
                    </a>
                  </Link>
                  <Link href="/collections">
                    <a
                      className={
                        router.pathname === "/collections" ? style.active : ""
                      }
                    >
                      {t("collection")}
                    </a>
                  </Link>
                </div>
              </nav>
              <div className={style.logoDiv}>
                <Link href="/">
                  <a>
                    <Image src={logo} alt="logo" className={style.logo} />
                  </a>
                </Link>
              </div>
            </div>

            <div className={style.headerIcon}>
              <div className={style.basket} onClick={goFactorHandler}>
                <ShoppingCartIcon />
                {basket.basketLength === 0 ? (
                  ""
                ) : (
                  <div
                    className={
                      lang.lng === "fa"
                        ? style.basketAmount
                        : style.basketAmountEn
                    }
                  >
                    {basket.basketLength}
                  </div>
                )}
              </div>

              <span>
                {lang.lng === "en" ? (
                  <span onClick={() => changeLng("fa")}>fa</span>
                ) : (
                  <span onClick={() => changeLng("en")}>en</span>
                )}
              </span>
              <div className="position-relative">
                {boxTarget && (
                  <div className={style.suggest}>
                    {searchingTarget.map((item) => {
                      return (
                        <span key={item.id}>
                          <Link href={`/product/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                )}
                <input
                  placeholder={t("search")}
                  onChange={searchHandler}
                  onKeyDown={(event) =>
                    event.key === "Enter"
                      ? (window.location = "/explore?search=" + textSearch)
                      : null
                  }
                  className={`${style.searchBox} ${
                    showSearchBox ? style.inputDesign : style.inputDesignNot
                  }`}
                />
                <SearchIcon
                  onClick={serachHandler}
                  className={showSearchBox ? style.searchBoxIcon : ""}
                />
                {/* <FontAwesomeIcon
                  icon={faSearch}
                  onClick={serachHandler}
                  className={showSearchBox ? style.searchBoxIcon : ""}
                /> */}
              </div>
              {state.loginStatus ? (
                <Link href={"/profile"}>
                  <a>
                    <PersonIcon />
                  </a>
                </Link>
              ) : (
                <Link href={"/signin"}>
                  <a>{t("login")}</a>
                </Link>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={` d-flex  align-items-center ${style.mobileIcon}`}>
              <MenuIcon sx={{ fontSize: 12 }} onClick={openMenu} />
              {menuBar ? (
                <Menu show={menuBar} setLang={(lng) => changeLng(lng)} />
              ) : null}
              {state.loginStatus ? (
                <Link href={"/profile"}>
                  <a>
                    <PersonIcon sx={{ fontSize: 20 }} />
                  </a>
                </Link>
              ) : (
                !showSearchBox && (
                  <Link href={"/signin"}>
                    <a>{t("login")}</a>
                  </Link>
                )
              )}
              <div className="position-relative d-flex align-items-center">
                {boxTarget && (
                  <div className={style.suggest}>
                    {searchingTarget.map((item) => {
                      return (
                        <span key={item.id}>
                          <Link href={`/product/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </span>
                      );
                    })}
                  </div>
                )}
                <input
                  placeholder={t("search")}
                  onChange={searchHandler}
                  onKeyDown={(event) =>
                    event.key === "Enter"
                      ? (window.location = "/explore?search=" + textSearch)
                      : null
                  }
                  className={`${style.searchBox} ${
                    showSearchBox ? style.inputDesign : style.inputDesignNot
                  }`}
                />
                <SearchIcon
                  onClick={serachHandler}
                  className={showSearchBox ? style.searchBoxIcon : ""}
                />
              </div>
            </div>
            <div className={` d-flex  align-items-center ${style.mobileLogo}`}>
              {!showSearchBox && (
                <>
                  <div className={style.basket} onClick={goFactorHandler}>
                    <ShoppingCartIcon sx={{ fontSize: 18 }} />
                    {basket.basketLength <= 0 ? (
                      ""
                    ) : (
                      <div
                        className={
                          lang.lng === "fa"
                            ? style.basketAmount
                            : style.basketAmountEn
                        }
                      >
                        {basket.basketLength}
                      </div>
                    )}
                  </div>

                  <Link href="/shop">
                    <a>
                      <ShoppingBagIcon
                        sx={{ fontSize: 20, margin: "0 1rem" }}
                      />
                    </a>
                    {/* <span>{t("descoverMore")}</span> */}
                  </Link>
                  <Link href="/">
                    <a>
                      <Image src={logo} alt="logo" className={style.logo} />
                    </a>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  ) : (
    ""
  );
};

export default Header;
