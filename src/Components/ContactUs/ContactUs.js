import React from "react";
import { useTranslation } from "react-i18next";

//stylesheet
import style from "./ContactUs.module.css";

//icons

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const lang = useSelector((state) => state.stateLang.lng);
  const { t } = useTranslation();

  const openInNewTab = url => {
    window.open(url, '_blank');
  };

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
            <p className={style.phoneNumber}>
              <a href="tel:02191690818">
                021 91 690 818
              </a>
            </p>
            <p>{t("addresTest1")}</p>
             
          </div>
          <div
            className={`${style.address} ${
              lang === "fa" && style.paddingR
            } col-lg-6 col-md-6 col-12`}
          >
            <p 
              onClick={()=> openInNewTab("https://www.google.com/maps/place/35%C2%B031'46.8%22N+51%C2%B034'54.1%22E/@35.5296631,51.5794992,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xae1a581f8294feb7!8m2!3d35.5296631!4d51.5816879?hl=en")}
            >
                کیلومتر ۱۲ جاده امام رضا عباس آباد علاقبند مجتمع صنعتی بهارستان سالن ۶۴۷
            </p>
            <p
              onClick={() => openInNewTab("https://www.google.com/maps/place/35%C2%B040'39.2%22N+51%C2%B025'06.3%22E/@35.6775568,51.4162305,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6aea2b93e49f7b7c!8m2!3d35.6775568!4d51.4184192?hl=en")}
            >
              بازار تهران 
              مترو پانزده خرداد 
              پاساژ دلگشا 
              طبقه منفی ۴ 
              پلاک  ۱۴۳  
            </p>
          </div>
        </div>
        <div className={style.social}>
                  <InstagramIcon sx={{ fontSize: 40 }} onClick={()=> openInNewTab("https://instagram.com/tiolastyle?igshid=NWRhNmQxMjQ=")} />
                  <WhatsAppIcon sx={{ fontSize: 40 }} />
                  <TwitterIcon sx={{ fontSize: 40 }} />
            </div> 
      </div>
    </div>
  );
};

export default ContactUs;
