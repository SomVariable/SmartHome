import React from 'react'
import { div } from 'react-router-dom'
import style from "./style.module.scss"
import members from "../../../img/sidebar/members.png"
import rooms from "../../../img/sidebar/rooms.png"
import statistics from "../../../img/sidebar/statisctics.png"

const chooseStyle = (currentComponent) => {
    const blocks = {
        homeSettings: `${style.item}`,
        membersSettings: `${style.item}`,
        roomsSettings: `${style.item}`,
        statisticsSettings: `${style.item}`
    }

    switch(currentComponent){
        case "homeSettings":
        return {...blocks, homeSettings: `${style.item} ${style.item__active}`}
        case "membersSettings":
        return {...blocks, membersSettings: `${style.item} ${style.item__active}`}
        case "roomsSettings":
        return {...blocks, roomsSettings: `${style.item} ${style.item__active}`}
        case "statisticsSettings":
        return {...blocks, statisticsSettings: `${style.item} ${style.item__active}`}
        default: 
        return {...blocks, homeSettings: `${style.item} ${style.item__active}`}
    }
} 

function Sections({currentComponent, setCurrentComponent}) {
    const {homeSettings,
        membersSettings,
        roomsSettings,
        statisticsSettings} = chooseStyle(currentComponent);
  return (
    <nav className = {style.sectionsNavigation}>
        <div className={homeSettings} onClick = {() => setCurrentComponent('homeSettings')}>
            <img src={rooms} alt=""  className = {style.sectionLogo}/>
            <h3 className = {style.sectionHeader}>Home</h3>
        </div>
        <div className={membersSettings} onClick = {() => setCurrentComponent('membersSettings')}>
            <img src={members} alt=""  className = {style.sectionLogo}/>
            <h3 className = {style.sectionHeader}>Members</h3>
        </div>
        <div className={roomsSettings} onClick = {() => setCurrentComponent('roomsSettings')}>
            <img src={rooms} alt=""  className = {style.sectionLogo}/>
            <h3 className = {style.sectionHeader}>Rooms</h3>
        </div>
        <div className={statisticsSettings} onClick = {() => setCurrentComponent('statisticsSettings')}>
            <img src={statistics} alt=""  className = {style.sectionLogo}/>
            <h3 className = {style.sectionHeader}>Statistics</h3>
        </div>
    </nav>
  )
}

export default Sections