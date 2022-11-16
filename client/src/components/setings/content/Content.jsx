import React from 'react'
import style from "./style.module.scss"


function Content({currentComponent, chooseContent}) {
  
  return (
    <div className = {style.settingsContent}>
      {chooseContent(currentComponent)}
    </div>
  )
}

export default Content