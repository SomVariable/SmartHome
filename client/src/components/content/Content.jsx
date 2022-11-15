import React from 'react'
import Header from '../header/Header'
import Routes from '../routes/Routes'
import style from "./style.module.scss"


function Content() {
  return (
    <div className={style.content}>
        <Header />
        <div className={`${style.page} horizontal-index vertical-index`}>
        <Routes />
        </div>
    </div>
  )
}

export default Content