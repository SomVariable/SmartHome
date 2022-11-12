import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from '../../components/authorization/login';
import Registration from '../../components/authorization/registration';
import style from "./style.module.scss"

function AuthorizationPage() {
    const isAuth = useSelector(state => state.user.isAuth);
  return (
    <>
        {!isAuth &&
          <Switch>
            <Route path = "/registration" component = {Registration}/>  
            <Route path = "/login" component = {Login}/> 
          </Switch>
        }
    </>
  )
}

export default AuthorizationPage