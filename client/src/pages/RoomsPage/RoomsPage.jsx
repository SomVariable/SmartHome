import React from 'react';
import Block from '../../components/subcomponents/block/Block.jsx';
import style from "./style.module.scss"

import burger from '../../img/sidebar/rooms.png';
import Rooms from '../../components/rooms/Rooms.jsx';
import { useState } from 'react';
import { Popup } from '../../components/modal/Popup.jsx';


const RoomsPage = props =>{
  const [roomsNavigationOpened, setroomsNavigationOpened] = useState(false);

return (
    <div className={style.roomsPage}>
        <div className={style.roomsPage__contant}>
            <h2 className={style.header}>Kitchen</h2>
            <div className={style.roomsBurger}><img src={burger} alt="" onClick={() => setroomsNavigationOpened(true)} /></div>
            <Popup opened={roomsNavigationOpened} onClose={() => setroomsNavigationOpened(false)}> <div className={style.roomsNavigation}><Rooms /></div> </Popup>
            <ul className={style.items}>
                <li className={style.item}><Block name = 'Room Temperature' content = '+23.5°C' /></li>
                <li className={style.item}><Block name = 'room Humidity' content = '40%' /></li>
                <li className={style.item}><Block name = 'Room Lighting' content = '86%' /></li>
                <li className={style.item}><Block name = 'Room Temperature' content = '+23.5°C' /></li>
                <li className={style.item}><Block name = 'room Humidity' content = '40%' /></li>
                <li className={style.item}><Block name = 'Room Lighting' content = '86%' /></li>
                <li className={style.item}><Block name = 'Room Temperature' content = '+23.5°C' /></li>
                <li className={style.item}><Block name = 'room Humidity' content = '40%' /></li>
                <li className={style.item}><Block name = 'Room Lighting' content = '86%' /></li>
            </ul>
        </div>
        
         <div className={style.rooms}><Rooms  /></div>
    </div>
);
}

export default RoomsPage;