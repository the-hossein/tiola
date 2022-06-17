import React, { useState } from "react";
import Input from "../../tools/input/Input";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import callApi from "../../api/callApi";
import { ADD_USER, BASE_URL } from "../../api/urls";
import { notify } from "../../tools/toast/toast";

const MobileFooter = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const [phoneNum, setPhoneNum] = useState("");
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
          console.log(response);
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


  return (
    <>
      <div className="d-flex flex-column  ">
        <div className={style.phone}>
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
          <div className={style.socialMediaMB}>
            <TwitterIcon />
            <WhatsAppIcon />
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
            <span>{lang === "fa" ? "۰۲۱۹۱۶۹۰۸۱۸" : "021 91 690 818"}</span>
          </a>
        </div>
        <div className="d-flex align-item-center justify-content-evenly pt-3">
          <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>
          <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}>
            <a
              id="idpay-cert"
              href="https://idpay.ir/cert?id=97591885&domain=https://tiolastyle.com/"
              target="blank"
              className={style.namad}
            >
              <img src="https://static.idpay.ir/logo/cert.svg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
