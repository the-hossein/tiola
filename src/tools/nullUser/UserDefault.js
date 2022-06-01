import React from 'react';

const UserDefault = () => {
    return (
        <>
            <div className='container'>
                hello world
                <div className='row'>
                    <h1 className='col-12 col-md-6'>you not Have Account !</h1>
                    <div className='col-12 col-md-6'>
                        <div className='row justify-content-around'>
                            <button>Go To Home</button>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDefault;