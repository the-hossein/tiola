import React from 'react';
import { Circle } from '@mui/icons-material';

//stylesheet
import style from './Board.module.css';

const Square = (props) => {
    return (
        <div className={style.square} {...props}>
            {props.x ? 'X' : props.y ? 'O' : ''}
        </div>
    );
};

export default Square;