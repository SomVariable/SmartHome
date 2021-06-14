import React, { useState } from 'react';
import style from '../../style/content.module.css';
import Input from '../subcomponents/input';
import {NavLink} from 'react-router-dom';
import {registration} from '../../action/user'

const Registration = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
return (
    <div className={style.content}>
        <div className={style.container}>
            <div className={style.forma}>
                <h3>Registration</h3>
                <Input value = {email} setValue = {setEmail} type = 'text' placeholder = "Enter email"/>
                <Input value = {password} setValue = {setPassword} type = 'password' placeholder = "Enter password"/>
                <Input value = {name} setValue = {setName} type = 'text' placeholder = "Enter name"/>
                <Input value = {post} setValue = {setPost} type = 'text' placeholder = "Enter post"/>
                <button className = {style.btn} onClick = {() => registration(email, password, name, post, true)}>ok</button>
                <div className="authorization"><NavLink to = 'login'>Login</NavLink></div>
            </div>
        </div>
    </div>
);
}

export default Registration;