import React from 'react'
import { useState } from 'react';
import Burger from '../../components/burger/Burger'
import { Popup } from '../../components/modal/Popup';
import Sidebar from '../../components/sidebar/Sidebar'
import SidebarContent from '../../components/sidebarContent/SidebarContent';
import style from "./style.module.scss"

function Navigation() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return (
    <>
        <Sidebar />
        <Popup opened={sidebarOpened} onClose={() => setSidebarOpened(false)}> <div className={style.sidebarContent}><SidebarContent /></div> </Popup>
        <Burger setOpend = {setSidebarOpened}/>
    </>
  )
}

export default Navigation