import React from 'react'
import Room from '../room/Room'
import style from "./style.module.scss"
import kitchen from '../../img/content/rooms/kitchen.png';
import badroom from '../../img/content/rooms/badroom.png';
import bathroom from '../../img/content/rooms/bathroom.png';
import livingroom from '../../img/content/rooms/livingroom.png';

function Rooms() {
  return (
    <ul className={style.rooms}>
        <Room imgSrc = {kitchen}/>
        <Room imgSrc = {badroom}/>
        <Room imgSrc = {bathroom}/>
        <Room imgSrc = {livingroom}/>
    </ul>
  )
}

export default Rooms