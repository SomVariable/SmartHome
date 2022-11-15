import React from 'react';
import style from './sidebar.module.scss';


import SidebarContent from '../sidebarContent/SidebarContent';

const Sidebar = () =>{
return (
    <div className={style.sidebar}>
        <SidebarContent />
        
    </div>
);
}

export default Sidebar;