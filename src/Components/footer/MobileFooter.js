import React from 'react'
import Input from '../../tools/input/Input'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./Footer.module.css";
import { useTranslation } from 'react-i18next';

const MobileFooter = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className='d-flex flex-column  '>
        <div>
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
          <span>{t("ContactUs")}</span>

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