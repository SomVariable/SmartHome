import React, { useState } from 'react';
import style from './style.module.scss';
import alert from '../../img/header/alerts.png';
import settings from '../../img/header/settings.png';
import account from '../../img/header/account.png';
import { useSelector } from 'react-redux';
import AuthorizationBar from '../subcomponents/authorizationBar/AuthorizationBar';
import { Popover } from '../modal/Popover';
import { Popup } from '../modal/Popup';
import { useRef } from 'react';
import Settings from '../setings/Settings';


const Header = () =>{
    const [authorizationOpened, setAuthorizationOpened] = useState(false);
    const [newsOpened, setNewsOpened] = useState(false);
    const [settingsOpened, setAsSttingsOpened] = useState(false);
    const isAuth = useSelector(state => state.user.isAuth);
    const authRef = useRef();
    const newsRef = useRef();


return (
    <div className={style.header}>
        <div className={style.header__bar}>
            <input type="text" placeholder = 'search' className={style.header__srearch} />
            <ul className={style.header__list} >
                <li className={style.item} ref = {newsRef}>
                    <Popover opened={newsOpened} onClose={() => setNewsOpened(false)} parent = {newsRef.current}>
                        <div className={style.popover}>
                            <h2>sdfsfs</h2>
                        </div>
                    </Popover>
                    <i href='#'><img className = {style.icon} src={alert} alt="" onClick = {() => { setNewsOpened(true);}} /></i></li>
                <li className={style.item}>
                    <Popup opened={settingsOpened} onClose={() => setAsSttingsOpened(false)}><Settings/></Popup>
                    <i href='#'><img className = {style.icon} src={settings} alt="" onClick={() => setAsSttingsOpened(true)} /></i></li>
                <li className={style.item} ref = {authRef}>
                <Popover opened={authorizationOpened} onClose={() => setAuthorizationOpened(false)} parent = {authRef.current}> 
                    <div className={style.popover}>
                        <AuthorizationBar isAuth = {isAuth} />
                    </div>
                </Popover>
                    <img className = {style.icon} src={account} alt="" onClick = {() => { setAuthorizationOpened(true);}} />
                </li>
            </ul>
        </div>
    </div>
);
}

export default Header;