import React from 'react';
import style from './sidebar.module.css';

import logo from '../../img/sidebar/logo.png';
import members from '../../img/sidebar/members.png';
import rooms from '../../img/sidebar/rooms.png';
import statistics from '../../img/sidebar/statisctics.png';
import burger from '../../img/sidebar/menuBurger.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () =>{
return (
    <div className={style.sidebar}>
        <div className={style.content}>
            <div className={style.slidebar__btn}><img src={burger} alt="" /></div>
            <div className={style.logo}><NavLink to="/"><img src={logo} alt="" /></NavLink></div>
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
        </div>
        
    </div>
);
}

export default Sidebar;