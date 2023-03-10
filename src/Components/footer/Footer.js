import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "../../tools/input/Input";
import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MobileFooter from "./MobileFooter";
import persianNumber from "../../../src/tools/persianNumber/persianNumber";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import toPersianNum from "../../tools/persianNumber2/persianNumber2";
import callApi from "../../api/callApi";
import { ADD_USER, BASE_URL } from "../../api/urls";
import { notify } from "../../tools/toast/toast";

const Footer = () => {
  const [size, setSize] = useState([0]);
  const [phoneNum, setPhoneNum] = useState("");
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "bb692749-4d6a-4f71-93e0-19c8b8c7c77c";
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();
    (() => {
      const namad = document;
      const makescript = namad.createElement("script");
      makescript.src = "https://static.idpay.ir/trust.js?id=97591885&width=64";
      namad.getElementsByTagName("body")[0].appendChild(makescript);
    })();
  }, []);

  const TypeNumber = (e) => {
    if (!e) {
      e = window.event;
    }

    var code = e.keyCode || e.which;

    if (!e.ctrlKey) {
      if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
        e.preventDefault();
        return false;
      }
    }
    if (e.code === "Enter") {
      //checks whether the pressed key is "Enter"
      if (phoneNum.length === 11 && /^[0]?[9][0-9]{9}$/.test(phoneNum)) {
        const addUser = async () => {
          var myHeaders = {"Content-Type": "application/json"}
          const response = await callApi(
            `${BASE_URL + ADD_USER}?PhoneNumber=${phoneNum}`,
            "{}",
            myHeaders,
            "POST"
          );
          if (response[0].code === 200) {
            if (lang === "fa") {
              var text = "?????????? ?????? ???? ???????????? ??????  ????";
            } else {
              text = "Your number was successfully registered";
            }
            notify(text, "success");
          } else if (response[0].code === 206) {
            if (lang === "fa") {
              var text = "?????????? ?????? ???????? ?????? ?????? ??????";
            } else {
              text = "Your number is already registered";
            }
            notify(text, "warning");
          } else {
            if (lang === "fa") {
              var text = "?????????? ???? ????????";
            } else {
              text = "An error occurred";
            }
            notify(text, "error");
          }
        };
        addUser();
      } else {
        if (lang === "fa") {
          var text = "???????? ?????????? ?????? ???? ???? ?????????? ???????? ????????";
        } else {
          text = "Please enter your number correctly";
        }
        notify(text, "error");
      }
    }
    return true;
  };
  const changePhoneNUmber = (e) => {
    var persianNumbers = [
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g
      ],
      arabicNumbers = [
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g,
        /??/g
      ],
      fixNumbers = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    setPhoneNum(fixNumbers(e.target.value));
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={style.footer}>
        {size > 768 ? (
          <>
            <div className={style.footerStyle}>
              <div className={style.namad}>
                <a
                  referrerpolicy="origin"
                  target="blank"
                  href="https://trustseal.enamad.ir/?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX"
                >
                  <img
                    referrerpolicy="origin"
                    src="https://Trustseal.eNamad.ir/logo.aspx?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX"
                    id="Pq5WOtFgnkup0Clm8xfX"
                    alt="enamad image"
                  />
                </a>
              </div>
              <div className={style.phone} id="phone">
                <Input
                  lablelText={t("sendAMessage")}
                  type="text"
                  placeholder={t("typeHere")}
                  value={phoneNum}
                  changehandler={changePhoneNUmber}
                  keyDown={TypeNumber}
                  maxLength="11"
                />
                {/* <button className={style.send}>{t("sentBtn")}</button> */}
              </div>
              <a
                id="idpay-cert"
                href="https://idpay.ir/cert?id=97591885&domain=https://tiolastyle.com/"
                target="blank"
                className={style.namad}
              >
                <img src="https://static.idpay.ir/logo/cert.svg" />
              </a>
            </div>
            <div className={style.socialMedia}>
              <TwitterIcon />
              <a href="https://api.whatsapp.com/send?phone=989121059959">
                <WhatsAppIcon />
              </a>
              <InstagramIcon
                onClick={() =>
                  openInNewTab(
                    "https://instagram.com/tiolastyle?igshid=NWRhNmQxMjQ="
                  )
                }
              />
            </div>
            <a href="tel:02191690818" id={style.phone}>
              <span>{t("ContactUs") + " :   "}</span>
              <span>{lang === "fa" ? "??????????????????????" : "021 91 690 818"}</span>
            </a>
          </>
        ) : (
          <MobileFooter />
        )}

        {lang === "fa" ? (
          <p className={style.karma}>
            ???????? ???????? ????????
            <a href="https://karmaagy.com/"> ?????????? </a>
            ?????????? ?????? ?? ?????????????? ???? ??????????
            <a href="https://karmaagy.com/"> ?????????? </a>
            ???????? ???? ?????? ??????
            <a href="https://karmaagy.com/"> ?????????? </a>?? ?????? ???????? ???????????? ????????
            ?????? ??
          </p>
        ) : (
          <p className={style.karma}>
            All rights reserved for <a href="https://karmaagy.com/">karma</a>{" "}
            and the use of <a href="https://karmaagy.com/">karma</a> content is
            allowed only by mentioning the name of{" "}
            <a href="https://karmaagy.com/">karma</a> and inserting a direct
            link
          </p>
        )}
      </div>
    </>
  );
};

export default Footer;
