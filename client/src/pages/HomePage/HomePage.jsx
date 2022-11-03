import React from 'react';
import style from '../../style/content.module.css';
import Block from '../../components/subcomponents/block.jsx';


const HomePage = props =>{
return (
    <div className={style.content}>
        <div className={style.container}>
            <h2 className={style.header}>{`Welcome, ${props.username?props.username: 'user'}`}</h2>
            <ul className={style.items}>
                <li className={style.item}><Block name = 'Time' content = {new Date().toLocaleTimeString()} /></li>
                <li className={style.item}><Block name = 'OutdureTemperature' content = {'+21.3°C'} /></li>
                <li className={style.item}><Block name = 'Members at home' content = {['Jack,', 'Bob']} /></li>
            </ul>
        </div>
    </div>
);
}

export default HomePage;
// 
// 
