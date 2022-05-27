import React from 'react';
import XoGame from '../xogame/XoGame';
//stylesheet
import style from './Error404.module.css';


const Error404 = () => {
    return (
        <div className={`${style.containerMain}`}>
            <div className='container '>
                <div className='row justify-content-between'>
                    <div className='col-12 col-md-5 col-lg-5' >
                        <div className='d-flex flex-column text-center justify-content-between align-items-center'>
                            <h1 className='col-12 mb-5'>404</h1>
                            <p className='col-12 mb-5'>Looks like you are in a maze</p>
                            <p className='col-12 mb-5'>Use the keyboard to control the ball to maze exit return to the home</p>
                            <button className='col-12 text-center mb-t'>Go To Home Page</button>
                        </div>
                    </div>            
                    <div className='col-12 col-md-5 col-lg-5' >
                        <XoGame />
                        {/* <div className={style.game}>
                            <span className={style.ball}></span>
                        </div> */}
                    </div>            
                </div>
            </div>
        </div>
    );
};

export default Error404;