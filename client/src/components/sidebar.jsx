import React from 'react';
import style from '../style/sidebar.module.css';

import logo from '../img/sidebar/logo.png';
import members from '../img/sidebar/members.png';
import rooms from '../img/sidebar/rooms.png';
import statistics from '../img/sidebar/statisctics.png';
import burger from '../img/sidebar/menuBurger.png';

const Sidebar = () =>{
return (
    <div className={style.sidebar}>
        <div className={style.container}>
            <div className={style.slidebar__btn}><img src={burger} alt="" /></div>
            <div className={style.logo}><a href="/"><img src={logo} alt="" /></a></div>
            <nav className ={style.sidebar__list}>
                <a href="/members" className={style.item}>
                    <img src={members} alt="" />
                    <p>Members</p>
                </a>
                <a href="/rooms" className={style.item}>
                    <img src={rooms} alt="" />
                    <p>Rooms</p>
                </a>
                <a href="/statistics" className={style.item}>
                    <img src={statistics} alt="" />
                    <p>Statistics</p>
                </a>
            </nav>
        </div>
    </div>
);
}

export default Sidebar;