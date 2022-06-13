import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
 //stylesheet
import style from './Blog.module.css';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// import userProfile from ;

const Blog = ({title, titleEn, body, params}) => {

    const { t } = useTranslation();
    const lang = useSelector(state => state.stateLang.lng)

    const bodyReveiw = JSON.parse(body);

    return (
        <div className={`col-lg-6 col-12 mb-4 ${style.blogContainer}`}>
            <div className={`${style.container}`}>
                <div>
                    <img src={bodyReveiw.Paragraphs[0].picpath} alt='user' />
                </div>
                <div className={style.text}>
                    <h5 className={style.title}>
                        {lang === "fa" ? title : titleEn}
                    </h5>
                    <p className={style.blogContent}>
                        {lang === "fa" ? bodyReveiw.Paragraphs[0].description : bodyReveiw.Paragraphs[0].descriptionen}
                    </p>
                    <div className={style.btnView}>
                        <Link href={`/blogs/${params}`}><Button variant='outline' title='see more...' size='sm' >{t("view")}</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;