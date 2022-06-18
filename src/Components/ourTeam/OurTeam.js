import React from 'react';
import style from './ourTeam.module.css';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {

    const { t } = useTranslation()

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src="/Assets/images/4.jpg" />
            </div>     
            <div className={style.bodyText}>
                <h1>{t("ourTeam")}</h1>
                <p>
                    {t("introTeam")}
                </p>
            </div>            
        </div>
    );
};

export default OurTeam;