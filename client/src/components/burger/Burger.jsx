import React from 'react'
import style from "./style.module.scss"
import burger from '../../img/sidebar/menuBurger.png';

function Burger({setOpend}) {
  return (
    <div className={style.slidebar__btn}><img src={burger} alt="" onClick = {() => setOpend(true)}/></div>
  )
}

export default Burger