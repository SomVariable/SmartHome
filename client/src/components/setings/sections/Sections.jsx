import React from 'react'
import { div } from 'react-router-dom'
import style from "./style.module.scss"
import members from "../../../img/sidebar/members.png"
import rooms from "../../../img/sidebar/rooms.png"
import statistics from "../../../img/sidebar/statisctics.png"

function Sections({setCurrentComponent}) {
  return (
    <nav>
        <div className={style.item} onClick = {() => setCurrentComponent('homeSettings')}>
            <img src={members} alt="" />
            <p>Members</p>
        </div>
        <div className={style.item} onClick = {() => setCurrentComponent('membersSettings')}>
            <img src={members} alt="" />
            <p>Members</p>
        </div>
        <div className={style.item} onClick = {() => setCurrentComponent('roomsSettings')}>
            <img src={rooms} alt="" />
            <p>Rooms</p>
        </div>
        <div className={style.item} onClick = {() => setCurrentComponent('statisticsSettings')}>
            <img src={statistics} alt="" />
            <p>Statistics</p>
        </div>
    </nav>
  )
}

export default Sections