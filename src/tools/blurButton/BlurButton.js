import React from 'react'
import style from './BlurButton.module.css'
const BlurButton = ({btnText}) => {
  return (
    <>
    <div className={style.blurButton}>
        <button>{btnText}</button>
    </div>
    </>
  )
}

export default BlurButton