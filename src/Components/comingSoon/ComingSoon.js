import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./ComingSoon.module.css";

const ComingSoon = ({ show }) => {
    
    const { t } = useTranslation();

    return (
        <div className={styles.container} >
            <div className={styles.text} >
                <h1>Coming Soon...</h1>
                <p>{t("teamKarmaAtWorked")}</p>
                <span onClick={() => show(1)} >{t("visitTiola")}</span>
            </div>
        </div>
    );
};

export default ComingSoon;