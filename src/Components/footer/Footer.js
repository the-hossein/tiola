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
const namadHref = "https://trustseal.enamad.ir/?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX";
const imageNamad = "https://Trustseal.eNamad.ir/logo.aspx?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX"

const jsxNamad = (<a referrerPolicy="origin" href={namadHref}>   
<img referrerPolicy="origin" src={imageNamad} alt="" id="Pq5WOtFgnkup0Clm8xfX" />          
</a>)

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
  const addPhone = () => {};

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
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const response = await callApi(
            `${BASE_URL + ADD_USER}?PhoneNumber=${phoneNum}`,
            "{}",
            myHeaders,
            "POST"
          );
          if (response[0].code === 200) {
            if (lang === "fa") {
              var text = "شماره شما با موفقیت ثبت  شد";
            } else {
              text = "Your number was successfully registered";
            }
            notify(text, "success");
          } else if (response[0].code === 206) {
            if (lang === "fa") {
              var text = "شماره شما قبلا ثبت شده است";
            } else {
              text = "Your number is already registered";
            }
            notify(text, "warning");
          } else {
            if (lang === "fa") {
              var text = "خطایی رخ داده";
            } else {
              text = "An error occurred";
            }
            notify(text, "error");
          }
        };
        addUser();
      } else {
        if (lang === "fa") {
          var text = "لطفا شماره خود را به درستی وارد کنید";
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
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g
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

  const openInNewTab = url => {
    window.open(url, '_blank');
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
                  changehandler={changePhoneNUmber}
                  keyDown={TypeNumber}
                  maxLength="11"
                />
                {/* <button className={style.send}>{t("sentBtn")}</button> */}
              </div>
              <div className={style.namad} onClick={()=> openInNewTab(namadHref)}>
              {/* <a referrerPolicy="origin" target="_blank" href={`https://trustseal.enamad.ir/?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX`}><img referrerpolicy="origin" src={`https://Trustseal.eNamad.ir/logo.aspx?id=280794&amp;Code=Pq5WOtFgnkup0Clm8xfX`} alt="e-namad"  id="Pq5WOtFgnkup0Clm8xfX" /></a> */}
              </div>
            </div>
            <div className={style.socialMedia}>
              <TwitterIcon />
              <WhatsAppIcon />
              <InstagramIcon onClick={()=> openInNewTab("https://instagram.com/tiolastyle?igshid=NWRhNmQxMjQ=") }/>
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
