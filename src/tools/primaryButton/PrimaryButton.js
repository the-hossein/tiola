import React from 'react'
import style from './PrimaryButton.module.css'
const PrimaryButton = ({btnText}) => {
  return (
    <>
    <div className={style.descoverBtn}>
        <button>{btnText}</button>
    </div>
    </>
  )
}

export default PrimaryButton