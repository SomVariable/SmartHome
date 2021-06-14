import React, { useEffect } from 'react';
import Header from './components/header'
import Members from './components/members'
import HomePage from './components/homepage'
import Rooms from './components/rooms'
import Statistics from './components/statistics'
import Sidebar from './components/sidebar'
import Registration from './components/authorization/registration'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from './components/authorization/login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './action/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [])
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path = "/members" component = {Members}/>
        <Route path = "/rooms" component = {Rooms}/>
        <Route path = "/statistics" component = {Statistics}/>
        {!isAuth &&
          <Switch>
            <Route path = "/registration" component = {Registration}/>  
            <Route path = "/login" component = {Login}/> 
          </Switch>
        }
         
        <Route path = "/" component = {HomePage}/>
        <div className="background"></div>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
