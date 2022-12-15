import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Faq.module.css';
import { useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BoxQuestion = ({ question, answer }) => {

    const [showA, setShowA] = useState(false);
    const lang = useSelector(state => state.stateLang.lng);
    const { t } = useTranslation();

    return (
        <div className={`${style.boxRule} ${showA ? style.openWidth : "" }`} >
            <p className={style.questFirst}>
                {
                    lang === "fa" ? <span>سوال:</span> : <span>Q:</span>
                }
                <span>
                    {question}
                </span>
            </p>
            {/* {
                showA && 
            } */}
            <p className={showA ? style.boxActive : style.boxNot}>
                {
                    lang === "fa" ? <span>پاسخ:</span> : <span>A:</span>
                }
                <span>
                    {answer}
                </span>
            </p>
            <div className={`${lang === "fa" ? style.arrowIconFa : style.arrowIcon} ${!showA ? "" : lang === "fa" ? style.showArrowFa : style.showArrow}`} onClick={() => setShowA(prevState => !prevState)}>
                <ArrowForwardIosIcon fontSize='medium' />
            </div>
        </div>
    );
};

export default BoxQuestion;