import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./style.module.css"

function Room({imgSrc}) {
  return (
    <div className = {style.room}>
                    <NavLink to="">
                    <img src={imgSrc} alt="" />
                    <p>kitchen</p>
                    </NavLink>
    </div>
    
  )
}

export default Room