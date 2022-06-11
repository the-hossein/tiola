import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
 //stylesheet
import style from './Blog.module.css';

import { useSelector } from 'react-redux';

// import userProfile from ;

const Blog = ({title, titleEn, body, params}) => {
    const lang = useSelector(state => state.stateLang.lng)

    const bodyReveiw = JSON.parse(body);

    return (
        <div className='col-lg-6 col-12 mb-4'>
            <div className={`${style.container}`}>
                <div>
                    <img src={bodyReveiw.Paragraphs[0].picpath} alt='user' />
                </div>
                <div className={style.text}>
                    <h5 className={style.title}>
                        {/* {lang === "fa" ? title : titleEn} */}
                        hello world
                    </h5>
                    <p className={style.blogContent}>
                        {/* {lang === "fa" ? bodyReveiw.Paragraphs[0].description : bodyReveiw.Paragraphs[0].descriptionen} */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis
                    </p>
                    <Link href={`/blogs/${params}`}><Button variant='outline' title='see more...' size='sm' >view</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;