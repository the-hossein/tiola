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
  }, []);
  const addPhone = () => {
  
  };
  
  const TypeNumber = (e) => {
    var input = document.getElementById("phone");

    input.addEventListener("keydown", function (e) {
      if (e.code === "Enter" && phoneNum.length === 11) {
        //checks whether the pressed key is "Enter"

        const addUser = async () => {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const response = await callApi(
            `${BASE_URL + ADD_USER}?PhoneNumber=${phoneNum}`,
            "{}",
            myHeaders,
            "POST"
          );
          console.log(response[0].code);
          if (response[0].code <= 206) {
            if (lang === "fa") {
              var text = "شماره شما با موفقیت ثبت  شد";
            } else {
              text = "Your number was successfully registered";
            }
            notify(text, "success");
          } else {
            notify("no", "error");
          }
        };
        addUser();
      }
    });
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
    return true;


  };
  return (
    <>
      <div className={style.footer}>
        {size > 768 ? (
          // <div className="col-12">
          //   <div className="row  justify-content-between align-items-center">
          //     <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>

          //     <div
          //       className={`col-lg-4 col-md-6 col-sm-6 col-8 ${style.footerInput}`}
          //     >
          //       <Input
          //         lablelText={t("sendAMessage")}
          //         type="text"
          //         placeholder={t("typeHere")}
          //       />
          //       <button className={style.send}>{t("sentBtn")}</button>
          //       <div className={style.socialMedia}>
          //         <TwitterIcon />
          //         <WhatsAppIcon />
          //         <InstagramIcon />
          //       </div>
          //       <a href="tel:02126420420" id={style.phone}>
          //         <span>{t("ContactUs")}: 02126420420</span>
          //       </a>
          //     </div>
          //     <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>
          //   </div>
          // </div>
          <>
            <div className={style.footerStyle}>
              <div className={style.namad}></div>
              <div className={style.phone} id="phone">
                <Input
                  lablelText={t("sendAMessage")}
                  type="text"
                  placeholder={t("typeHere")}
                  value={phoneNum}
                  changehandler={(e) => setPhoneNum(e.target.value)}
                  keyDown={TypeNumber}
                />
                {/* <button className={style.send}>{t("sentBtn")}</button> */}
              </div>
              <div className={style.namad}></div>
            </div>
            <div className={style.socialMedia}>
              <TwitterIcon />
              <WhatsAppIcon />
              <InstagramIcon />
            </div>
            <a href="tel:02191690818" id={style.phone}>
              <span>{t("ContactUs") + " :   "}</span>
              <span>{lang === "fa" ? "۰۲۱۹۱۶۹۰۸۱۸" : "021 91 690 818"}</span>
            </a>
          </>
        ) : (
          <MobileFooter />
        )}
      </div>
    </>
  );
};

export default Footer;
