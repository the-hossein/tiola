import React from 'react';
import { useTranslation } from 'react-i18next';

//stylesheet
import style from './ContactUs.module.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    
    const {t} = useTranslation();

    return (
        <div className={`${style.container}`}>
                <div className={`${style.address}`}>
                    <h1>{t("ContactUs")}</h1>
                    <p>Address 1</p>
                    <p>Address 2</p>
                    <p>Address 3</p>
                </div>
                <div className={`${style.phone} `}>
                    <p>Phone 1</p>
                    <p>Phone 2</p>
                    <p>Phone 3</p>
                    <div className={style.logos}>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;