import React from 'react'
import member from '../../img/content/member.png';
import style from "./style.module.css"

function Member({userName, userRole, userStatus}) {
  return (
    <li className={style.member}>
        <img src={member} alt="" />
        <p className={style.name}>{userName}</p>
        <p className={style.post}>{userRole}</p>
        <p className={style.status}>{userStatus}</p>
    </li>
  )
}

export default Member