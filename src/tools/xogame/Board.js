import React from 'react';

//stylesheet
import style from './Board.module.css';

const Board = (props) => {
    return (
        <div className={style.board}> 
            {props.children}
        </div>
    );
};

export default Board;