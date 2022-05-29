import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
 //stylesheet
import style from './Blog.module.css';

// import userProfile from ;

const Blog = ({title, body, params}) => {
    return (
<div className="col-lg-6 col-12 mb-4">

        <div className={style.container}>
            <div>
                <img src='/Assets/images/2.jpeg' alt='user' />
            </div>
            <div className={style.text}>
                <h5 className={style.title}>{title}</h5>
                <p className={style.blogContent}>{body}</p>
                <Link href={`/blogs/${params}`}><Button variant='outline' title='see more...' size='sm' >view</Button></Link>
            </div>
            </div>

        </div>
    );
};

export default Blog;