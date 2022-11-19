import React from 'react'
import style from "./style.module.scss"

function Cheackbox({name, content}) {
  return (
    <div className={style.cheackbox}>
        <input type = "checkbox" name={name} ></input>
        <label htmlFor={name}>{content}</label>
    </div>

  )
}

export default Cheackbox