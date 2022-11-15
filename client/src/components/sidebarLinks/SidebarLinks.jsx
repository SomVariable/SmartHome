import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./style.module.scss"
import members from '../../img/sidebar/members.png';
import rooms from '../../img/sidebar/rooms.png';
import statistics from '../../img/sidebar/statisctics.png';

function SidebarLinks() {
  return (
    <nav className ={style.sidebar__list}>
        <NavLink to="/members" className={style.item}>
            <img src={members} alt="" />
            <p>Members</p>
        </NavLink>
        <NavLink to="/rooms" className={style.item}>
            <img src={rooms} alt="" />
            <p>Rooms</p>
        </NavLink>
        <NavLink to="/statistics" className={style.item}>
            <img src={statistics} alt="" />
            <p>Statistics</p>
        </NavLink>
    </nav>
  )
}

export default SidebarLinks