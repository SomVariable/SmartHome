import React from 'react';
import style from './style.module.scss';
import Block from '../../components/subcomponents/block/Block.jsx';


const HomePage = props =>{
return (
    <div className={style.homePage}>
        <h2 className={style.header}>{`Welcome, ${props.username?props.username: 'user'}`}</h2>
        <ul className={style.items}>
            <li className={style.item}><Block name = 'Time' content = {new Date().toLocaleTimeString()} /></li>
            <li className={style.item}><Block name = 'OutdureTemperature' content = {'+21.3°C'} /></li>
            <li className={style.item}><Block name = 'Members at home' content = {['Jack,', 'Bob']} /></li>
        </ul>
    </div>
);
}

export default HomePage;
// 
// 
