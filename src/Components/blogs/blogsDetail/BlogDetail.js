import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
//stylesheet
import style from './BlogsDetail.module.css';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';



const BlogDetail = () => {

    const params = useRouter();
    const id = +params.query.blog;

    const [blogTarget, setBlogTarget] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const data = response.data;
                setBlogTarget(data.filter(blog => blog.id === id));
                setLoading(false);
            })
            .catch(err => console.log(err))

    }, [blogTarget]);

    // console.log(blogTarget)
    // console.log(blogs);

    return (
        <div className={`'container-fluid' ${style.container}`}>
            <div>
                <div className={`col-12 ${style.imageHeader}`} >
                    <button onClick={()=> window.history.back()}><FontAwesomeIcon icon={faCaretLeft} />Blogs</button>
                    <h1>Blog NO 1</h1>
                    <p>Lorem ipsum dolor </p>
                </div>
            </div>
            <div className='container'>
                {/* <BlogPaginate blogDataProps={blogs} pageNum={2}  /> */}
                <div className={`row align-items-center ${style.blogMain}`}>
                    <div className={`'col-12 col-md-6 col-lg-6' ${style.headerContainer}`}>
                        <img className={style.imgBlog} src='/Assets/images/4.jpeg' alt='logo' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <h1>{blogTarget.length ? blogTarget[0].title : 'Loading...'}</h1>
                        <p>{blogTarget.length ? blogTarget[0].body : 'Loading...' }</p>
                    </div>
                </div>
                <div className={`row flex-row-reverse align-items-center ${style.blogMain}`}>
                    <div className={`'col-12 col-md-6 col-lg-6' ${style.headerContainer}`}>
                        <img className={style.imgBlog} src='/Assets/images/4.jpeg' alt='logo' />
                    </div>
                    <div className={`col-12 col-md-6 col-lg-6 ${style.textMain}`}>
                        <h1>{blogTarget.length ? blogTarget[0].title : 'Loading...'}</h1>
                        <p>{blogTarget.length ? blogTarget[0].body : 'Loading...' }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;