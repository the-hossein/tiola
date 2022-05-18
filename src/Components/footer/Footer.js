import React, { useLayoutEffect, useState } from "react";
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
  return (
    <>
      <div className={`row ${style.footer} justify-content-center m-0`}>
        {size > 500 ? (
          <div className="col-xl-8 col-11">
            <div className="row  justify-content-between align-items-center">
              <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>

              <div className={`col-lg-4 col-md-6 col-sm-6 col-8 ${style.footerInput}`}>
                <Input
                  lablelText={t("sendAMessage")}
                  type="text"
                  placeholder={t("typeHere")}
                />
                <button className={style.send}>{t("sentBtn")}</button>
                <div className={style.socialMedia}>
                  <TwitterIcon />
                  <WhatsAppIcon />
                  <InstagramIcon />
                </div>
              </div>
              <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>
            </div>
          </div>
        ) : (
          <MobileFooter />
        )}
      </div>
    </>
  );
};

export default Footer;
