import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './blogGet/Blog';

//stylesheet
import style from './Blogs.module.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=> setBlogs(response.data))
    })
    
    return (
        <div className={style.container}>
            <h1>Blogs</h1>
            <div className={style.blogMain}>
                {
                    !blogs.length ? <h2>Loading...</h2> :
                         blogs.map(blog => <Blog key={blog.id} title={blog.title} body={blog.body} />)
                }
            </div>
        </div>
    );
};

export default Blogs;