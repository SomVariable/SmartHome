import React, { useState } from 'react';
import Input from '../subcomponents/input/Input';
import {NavLink} from 'react-router-dom';
import style from "./style.module.scss"
import {registration} from '../../action/user'

const Registration = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
return (
    <div className={style.forma}>
        <h3>Registration</h3>
        <Input value = {email} setValue = {setEmail} type = 'text' placeholder = "Enter email"/>
        <Input value = {password} setValue = {setPassword} type = 'password' placeholder = "Enter password"/>
        <Input value = {name} setValue = {setName} type = 'text' placeholder = "Enter name"/>
        <Input value = {post} setValue = {setPost} type = 'text' placeholder = "Enter post"/>
        <button className = {style.btn} onClick = {() => registration(email, password, name, post, true)}>ok</button>
        <div className="authorization"><NavLink to = 'login'>Login</NavLink></div>
    </div>
);
}

export default Registration;