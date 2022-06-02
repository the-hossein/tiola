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
import Menu from "../../tools/menu/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  getProfile,
  loginFalse,
  loginTrue,
  openPopUp
} from "../../redux/register/registerAction";

import { fetchProducts } from "../../redux/getallproducts/allProductsAction";
import { getBasketDetails } from "../../redux/factor/factorAction";
const Header = ({ backColor }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang);
  const state = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateFactor);

  const [menuBar, setMenuBar] = useState(false);
  const [size, setSize] = useState([0]);
  const [boxTarget, setBoxTarget] = useState(false);

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
    console.log(targetSearch);
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
  const rightDir = () => {
    root.style.setProperty("--direction", "rtl");
    root.style.setProperty("--marginIcon", "0 0 0 1.5rem");
    root.style.setProperty("--textAlign-right", "left");
    root.style.setProperty("--float-left", "right");
    root.style.setProperty("--font", "IRANSansWeb");
    root.style.setProperty("--verySmall-font", "7pt");

    root.style.setProperty("--sm-font", "9pt");
    root.style.setProperty("--xs-font", "10pt");
    root.style.setProperty("--md-font", "12pt");
    root.style.setProperty("--lg-font", "14pt");
    root.style.setProperty("--xl-font", "16pt");
    root.style.setProperty("--xxl-font", "24pt");
    root.style.setProperty("--oxx-font", "26pt");
  };

  const leftDir = () => {
    root.style.setProperty("--direction", "ltr");
    root.style.setProperty("--marginIcon", "0 1.5rem 0 0");
    root.style.setProperty("--textAlign-right", "right");
    root.style.setProperty("--float-left", "left");
    root.style.setProperty("--font", "apple");
    root.style.setProperty("--verySmall-font", "10pt");
    root.style.setProperty("--sm-font", "11pt");
    root.style.setProperty("--xs-font", "12pt");
    root.style.setProperty("--md-font", "14pt");
    root.style.setProperty("--lg-font", "15pt");
    root.style.setProperty("--xl-font", "17pt");
    root.style.setProperty("--xxl-font", "26pt");
    root.style.setProperty("--oxx-font", "28pt");
  };

  useEffect(() => {
    if (ls) {
      const userToken = JSON.parse(ls);
      const tokenExp = userToken.exp;
      const token = userToken.token;
      const phone = userToken.phone;

      dispatch(getProfile());

      dispatch(getBasketDetails(state.basketid))
     

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
    dispatch(changeLang(Cookies.get("i18next")));
    dispatch(fetchProducts());
    const lngCookie = Cookies.get("i18next");
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
  const openMenu = () => {
    setMenuBar(!menuBar);
  };

  const targetSearch = allProducts.filter((item) =>
    item.title.includes(textSearch)
  );
const goFactorHandler=()=>{
  if(!state.loginStatus){
    dispatch(openPopUp())
  }else{
    router.push({
      pathname:'/factor'
    })
  }
}
  return !prelaod ? (
    <>
      <div className={`${style.header} ${backColor}`}>
        {size > 768 ? (
          <>
            <div className={`${style.headaritem} d-flex align-items-center`}>
              <nav
                className={` ${style.allitems} d-flex justify-content-between align-items-center`}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="position-relative"
                  onClick={openMenu}
                />
                {menuBar && <Menu backColor={backColor} />}
                <div>
                  <Link href="/">
                    <span
                      className={router.pathname === "/" ? style.active : ""}
                    >
                      {t("home")}
                    </span>
                  </Link>
                  <Link href="/shop">
                    <span
                      className={
                        router.pathname === "/shop" ? style.active : ""
                      }
                    >
                      {t("shop")}
                    </span>
                  </Link>
                  <Link href="/explore">
                    <span
                      className={router.pathname === "#" ? style.active : ""}
                    >
                      {t("explore")}
                    </span>
                  </Link>
                  <Link href="/collections">
                    <span
                      className={
                        router.pathname === "/collections" ? style.active : ""
                      }
                    >
                      {t("collection")}
                    </span>
                  </Link>
                </div>
              </nav>
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            <div className={style.headerIcon}>
                <div className={style.basket} onClick={goFactorHandler}>
                  <ShoppingCartIcon />
               {basket.basketLength===0?"":
                    <div>{basket.basketLength}</div>
               }
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
                    {targetSearch.map((item) => {
                      // {console.log(item)}
                      return (
                        <span key={item.id}>
                          <Link href={`/product/${item.id}`}>{item.title}</Link>
                        </span>
                      );
                    })}
                  </div>
                )}
                <input
                  placeholder={t("search")}
                  onChange={searchHandler}
                  onKeyDown={(event) =>
                    event.key === "Enter" &&
                    router.push({ pathname: "/explore" })
                  }
                  className={
                    showSearchBox ? style.searchBox : style.inputDesign
                  }
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
                  <PersonIcon />
                </Link>
              ) : (
                <Link href={"/signin"}>
                  <span>{t("login")}</span>
                </Link>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={` d-flex  align-items-center ${style.mobileIcon}`}>
              <FontAwesomeIcon icon={faBars} onClick={openMenu} />
              {menuBar ? <Menu /> : null}
              {state.loginStatus ? (
                <Link href={"/profile"}>
                  <PersonIcon />
                </Link>
              ) : (
                <Link href={"/signin"}>
                  <span>{t("login")}</span>
                </Link>
              )}
              <div className="position-relative d-flex align-items-center">
                  {
                    boxTarget && <div className={style.suggest}>
                        {targetSearch.map(item => {
                          // {console.log(item)}
                          return <span key={item.id}><Link href={`/product/${item.id}`} >{item.title}</Link></span>
                        })}
                    </div> 
                  }
                <input
                  placeholder={t("search")}
                  onChange={searchHandler}
                  onKeyDown={event => event.key === 'Enter' && router.push({pathname:'/explore'})}
                  className={
                    showSearchBox ? style.searchBox : style.inputDesign
                  }
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={serachHandler}
                  style={{ fontSize: 14 }}
                  className={showSearchBox ? style.searchBoxIcon : ""}
                />
              </div>
            </div>
            <div className={` d-flex  align-items-center ${style.mobileLogo}`}>
              <Link href="/factor">
                <div className={style.basket}>
                  <ShoppingCartIcon sx={{ fontSize: 12 }} />
                  <div>2</div>
                </div>
              </Link>
              <Link href="/shop">
                <ShoppingBagIcon sx={{ fontSize: 16 }} />
                {/* <span>{t("descoverMore")}</span> */}
              </Link>
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
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
