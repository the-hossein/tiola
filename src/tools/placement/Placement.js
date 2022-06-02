import React from 'react'
import style from './Placement.module.css'
const Placement = ({text}) => {
  return (
    <div className={style.placement}>{text}</div>
  )
}

export default Placement