import React, { useEffect } from 'react';
import Header from './components/Header'

import Sidebar from './components/Sidebar'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './action/user';
import Routes from './components/routes/Routes';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [])
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Routes />
        <div className="background"></div>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
