import React from 'react'
import member from '../../img/content/member.png';
import style from "./style.module.scss"

function Member({userName, userRole, userStatus}) {
  return (
    <div className={style.member} style= {{backgroundImage: `url(${member})`}}>
      <div className={style.member__content}>
        <p className={style.name}>{userName}</p>
        <p className={style.post}>{userRole}</p>
        <p className={style.status}>{userStatus}</p>
      </div>
    </div>
  )
}

export default Member