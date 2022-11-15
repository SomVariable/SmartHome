import React from 'react'
import style from "./style.module.scss"
import logo from '../../img/sidebar/logo.png';
import { NavLink } from 'react-router-dom';
import SidebarLinks from '../sidebarLinks/SidebarLinks';

function SidebarContent() {
  return (
    <div className={style.sidebar__content}>    
        <div className={style.logo}><NavLink to="/"><img src={logo} alt="" /></NavLink></div>
        <SidebarLinks />
    </div>
  )
}

export default SidebarContent