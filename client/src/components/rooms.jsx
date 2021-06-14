import React from 'react';
import style from '../style/content.module.css';
import Block from './subcomponents/block.jsx';

import kitchen from '../img/content/rooms/kitchen.png';
import badroom from '../img/content/rooms/badroom.png';
import bathroom from '../img/content/rooms/bathroom.png';
import livingroom from '../img/content/rooms/livingroom.png';
const Rooms = props =>{
return (
    <div className={style.content}>
        <div className={style.container}>
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
            <ul className={style.rooms}>
                <div className = {style.room}>
                    <a href="">
                    <img src={kitchen} alt="" />
                    <p>kitchen</p>
                    </a>
                </div>
                <div className = {style.room}>
                    <a href="">
                    <img src={badroom} alt="" />
                    <p>badroom</p>
                    </a>
                </div>
                <div className = {style.room}>
                    <a href="">
                    <img src={bathroom} alt="" />
                    <p>bathroom</p>
                    </a>
                </div>
                <div className = {style.room}>
                    <a href="">
                    <img src={livingroom} alt="" />
                    <p>livingroom</p>
                    </a>
                </div>
            </ul>
        </div>
    </div>
);
}

export default Rooms;