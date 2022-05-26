import React from 'react';
import { useRouter } from 'next/router';

const BlogDetail = () => {
    const id = useRouter();
    console.log(id.query.blog)
    return (
        <div className='container-'>
            <div>
                <img src='/Assets/images/2.jpeg' alt='blog image' />
            </div>
            <div>
                <p>
                    lorem
                </p>
                <img src='/Assets/images/4.jpeg' alt='blog image' />
            </div>
            <div>
                <img src='/Assets/images/1.jpeg' alt='blog image' />
                <p>
                    lorem
                </p>
            </div>
            <div>
                <span>nextPage</span>
                <span>number</span>
                <span>prevPage</span>
            </div>
        </div>
    );
};

export default BlogDetail;