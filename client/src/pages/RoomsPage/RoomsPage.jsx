import React from 'react';
import Block from '../../components/subcomponents/block/Block.jsx';
import style from "./style.module.scss"
import kitchen from '../../img/content/rooms/kitchen.png';
import badroom from '../../img/content/rooms/badroom.png';
import bathroom from '../../img/content/rooms/bathroom.png';
import livingroom from '../../img/content/rooms/livingroom.png';
import Room from '../../components/room/Room';

const RoomsPage = props =>{
return (
    <div className={style.roomsPage}>
        <div className={style.roomsPage__contant}>
            <h2 className={style.header}>Kitchen</h2>
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
        
        <ul className={style.rooms}>
            <Room imgSrc = {kitchen}/>
            <Room imgSrc = {badroom}/>
            <Room imgSrc = {bathroom}/>
            <Room imgSrc = {livingroom}/>
        </ul>
    </div>
);
}

export default RoomsPage;