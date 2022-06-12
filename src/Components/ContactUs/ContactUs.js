import React from "react";
import { useTranslation } from "react-i18next";

//stylesheet
import style from "./ContactUs.module.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();

  return (
    <div className={style.contanctUSContainer}>
      <div className={`container`}>
        <div
          className={`row m-0 align-items-center justify-content-between ${
            lang === "fa" && "flex-row-reverse"
          }`}
        >
          <h1 className={style.title}>{t("ContactUs")}</h1>
          <div
            className={`${style.phone} ${
              lang === "fa" && style.paddingR
            } col-lg-4 col-md-5 col-12`}
          >
            <p>021 26 420 420</p>
            <p>{t("addresTest1")}</p>
             
          </div>
          <div
            className={`${style.address} ${
              lang === "fa" && style.paddingR
            } col-lg-6 col-md-6 col-12`}
          >
            <p>{t("addresTest")}</p>
            <p>{t("addresTest")}</p>
          </div>
        </div>
        <div className={style.social}>
                  <InstagramIcon sx={{ fontSize: 40 }} />
                  <WhatsAppIcon sx={{ fontSize: 40 }} />
                  <TwitterIcon sx={{ fontSize: 40 }} />
            </div> 
      </div>
    </div>
  );
};

export default ContactUs;
