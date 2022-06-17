import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Faq.module.css';
import { useSelector } from 'react-redux';
import BoxQuestion from './BoxQuestion';

const Faq = () => {

    
    const lang = useSelector(state => state.stateLang.lng);
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <h1>{t("FAQ")}</h1>
            <div className={style.faqContainer}>
                <div className={style.col}>
                    <BoxQuestion
                        question={lang === "fa" ? "آيا براى ثبت سفارش حتماً بايد در سايت ثبت نام كنيم؟" : "Do we have to register on the site to place an order?"} 
                        answer={lang === "fa" ? "بله، براى ثبت سفارش لازم است ابتدا در سايت ثبت نام كنيد." : "Yes, to register an order, you need to register on the site first."}  
                    />
                    <BoxQuestion
                        question={lang === "fa" ? "آيا مى توانيم از طريق سايت سفارشمان را پيگيرى كنيم؟" : "Can we track our order through the site?"} 
                        answer={lang === "fa" ? "بله، از بخش حساب كاربرى خود يا در منو، بخس ذخيره شده، مى توانيد سفارش خود را پيگيرى كنيد." : "Yes, you can track your order from your account section or in the saved menu."}  
                    />
                    <BoxQuestion
                        question={lang === "fa" ? "آيا مى توانيم سفارش خود را تغيير دهيم يا كنسل كنيم؟" : "Can we change or cancel our order?"} 
                        answer={lang === "fa" ? "خير، امكان انجام اين كار وجود ندارد." : "No, this is not possible."}  
                    />
                </div>
                <div className={style.col}>
                    <BoxQuestion
                        question={lang === "fa" ? "آيا امكان مرجوع يا تعويض كالا وجود دارد؟" : "Is it possible to return or exchange the goods?"} 
                        answer={lang === "fa" ? "در صورتى كه محصول ارسال شده براى شما مشكلى داشته باشد،مى توانيد آن را تعويض كنيد. در غير اين صورت، امكان تعويض و مرجوع وجود ندارد." : "If the product shipped to you has a problem, you can replace it. Otherwise, it is not possible to exchange and return."}  
                    />
                    <BoxQuestion
                        question={lang === "fa" ? "آيا پشتيبانى سايت در تمامى ساعات پاسخگوى سوالات خواهد بود؟" : "Will site support answer questions at all hours?"} 
                        answer={lang === "fa" ? "در ساعات كارى مى توانيد با پشتيبانى سايت در ارتباط باشيد." : "You can contact the site support during business hours."}  
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;