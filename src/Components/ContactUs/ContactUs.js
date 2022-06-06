import React from 'react';
import { useTranslation } from 'react-i18next';

//stylesheet
import style from './ContactUs.module.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactUs = () => {
    
    const {t} = useTranslation();

    return (
        <div className={`${style.container}`}>
                <div className={style.img}></div>
                <div className={`${style.address}`}>
                    <h1>{t("ContactUs")}</h1>
                    <p>{t("addresTest")}</p>
                    <p>{t("addresTest")}</p>
                    <p>{t("addresTest")}</p>
                </div>
                <div className={`${style.phone} `}>
                    <h1></h1>
                    <p>021 88 288 206</p>
                    <p>Phone 2</p>
                    <p>Phone 3</p>
                    <div className={style.logos}>
                        <TwitterIcon fontSize='large' />
                        <WhatsAppIcon fontSize='large' />
                        <InstagramIcon fontSize='large' />
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;