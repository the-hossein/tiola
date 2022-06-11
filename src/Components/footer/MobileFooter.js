import React from 'react'
import Input from '../../tools/input/Input'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./Footer.module.css";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const MobileFooter = () => {
  const { t } = useTranslation();
const lang=useSelector(state=>state.stateLang.lng)
  return (
    <>
    <div className='d-flex flex-column  '>
        <div className={style.phone}>
          <Input
           lablelText={t("sendAMessage")}
           type="text"
           placeholder={t("typeHere")}
          />
          {/* <button className={style.send}>{t("sentBtn")}</button> */}
          <div className={style.socialMediaMB}>
            <TwitterIcon />
            <WhatsAppIcon />
            <InstagramIcon />
          </div>
          <a href="tel:02191690818" id={style.phone}>
              <span>{t("ContactUs") + " :   "}</span>
              <span>{lang === "fa" ? "۰۲۱۹۱۶۹۰۸۱۸" : "021 91 690 818"}</span>
            </a>

        </div>
       <div className='d-flex align-item-center justify-content-evenly pt-3'>
       <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>
        <div className={`col-lg-1  col-md-2 col-2 ${style.namad}`}></div>

       </div>
      </div>
    </>
  )
}

export default MobileFooter