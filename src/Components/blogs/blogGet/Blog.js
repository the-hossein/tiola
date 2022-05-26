import React from 'react';

//stylesheet
import style from './Blog.module.css';

// import userProfile from ;

const Blog = ({title, body}) => {
    return (
        <div className={style.container}>
            <div>
                <img src='/Assets/images/2.jpeg' alt='user' />
            </div>
            <div className={style.text}>
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Blog;