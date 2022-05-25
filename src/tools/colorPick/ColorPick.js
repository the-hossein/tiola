import React from 'react'
import style from './ColorPick.module.css'
const ColorPick = ({color}) => {
  return (
   <span className={style.color} style={{backgroundColor:color}}>

   </span>
  )
}

export default ColorPick