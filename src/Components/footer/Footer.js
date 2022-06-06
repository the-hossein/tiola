import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "../../tools/input/Input";
import style from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MobileFooter from "./MobileFooter";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [size, setSize] = useState([0]);
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

  return (
    <>
      <div className={style.footer}>
          {size > 500 ? (
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
              <div className={style.phone}>
                <Input
                  lablelText={t("sendAMessage")}
                  type="text"
                  placeholder={t("typeHere")}
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
            </>
          ) : (
            <MobileFooter />
          )}
      </div>
    </>
  );
};

export default Footer;
