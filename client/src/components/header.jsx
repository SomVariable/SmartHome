import React, { useState } from 'react';
import style from '../style/header.module.css';
import AuthorizationBar from './subcomponents/authorizationBar';
import alert from '../img/header/alerts.png';
import settings from '../img/header/settings.png';
import account from '../img/header/account.png';
import { useSelector } from 'react-redux';


const Header = () =>{
    const [isNavbar, setNavbar] = useState(false);
    const isAuth = useSelector(state => state.user.isAuth);
return (
    <div className={style.header}>
        <div className={style.header__bar}>
            <input type="text" placeholder = 'search' className={style.header__srearch} />
            <ul className={style.header__list} >
                <li className={style.item}><i href='#'><img src={alert} alt="" /></i></li>
                <li className={style.item}><i href='#'><img src={settings} alt="" /></i></li>
                <li className={style.item} >
                    {isNavbar && <AuthorizationBar isAuth = {isAuth} />}
                    <img src={account} alt="" onClick = {() => { setNavbar(!isNavbar);}} />
                </li>
            </ul>
        </div>
    </div>
);
}

export default Header;