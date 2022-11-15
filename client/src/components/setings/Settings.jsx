import React from 'react'
import Content from './content/Content'
import Sections from './sections/Sections'
import style from "./style.module.scss"
import HomeSettings from "./settingsComponents/homeSettings/HomeSettings"
import MemberSettings from "./settingsComponents/memberSettings/MemberSettings"
import RoomsSetting from "./settingsComponents/roomsSettings/RoomsSetting"
import StatisticsSettings from "./settingsComponents/statisticsSettings/StatisticsSettings"
import { useState } from 'react'

const chooseContent = (currentComponent) => {
  switch(currentComponent){
    case "homeSettings":
      return <HomeSettings />
    case "membersSettings":
      return <MemberSettings />
    case "roomsSettings":
      return <RoomsSetting />
    case "statisticsSettings":
      return <StatisticsSettings />
    default: 
      return <HomeSettings />
  }
}


function Settings() {
  const [currentComponent, setCurrentComponent] = useState()
  return (
    <div className = {style.settings}>
        <Sections setCurrentComponent = {setCurrentComponent}/>
        <Content currentComponent = {currentComponent} chooseContent = {chooseContent}/>
    </div>
  )
}

export default Settings