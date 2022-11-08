import React from 'react';
import style from './style.module.scss';
import {NavLink} from "react-router-dom"
import { logout } from '../../../reducers/userReduser';
import {useDispatch} from 'react-redux';

const AuthorizationBar = props =>{
    const dispatch = useDispatch();
    return (
        <div className={style.authorizationBar}>
            {!props.isAuth && <div className={style.login}><NavLink to = "/login">Login</NavLink> </div>}
            {!props.isAuth && <div className={style.registration}><NavLink to = "/registration">Registration</NavLink> </div>}
            {props.isAuth && <div className={style.exit} onClick = {() => {dispatch(logout())}}>Exit</div>} 
        </div>
    );
}

export default AuthorizationBar;