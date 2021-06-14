import React, { useState } from 'react';
import style from '../../style/content.module.css';
import Input from '../subcomponents/input';
import {NavLink} from 'react-router-dom';
import {login} from '../../action/user';
import {useDispatch} from 'react-redux';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const dispatch = useDispatch();
return (
    <div className={style.content}>
        <div className={style.container}>
            <div className={style.forma}>
                <h3>Login</h3>
                <Input value = {email} setValue = {setEmail} type = 'text' placeholder = "Enter email"/>
                <Input value = {password} setValue = {setPassword} type = 'password' placeholder = "Enter password"/>
                <button className = {style.btn} onClick = {() => dispatch(login(email, password, name, post, true))}>ok</button>
                <div className="authorization"><NavLink to = 'registration'>Registration</NavLink></div>
            </div>
        </div>
    </div>
);
}

export default Login;