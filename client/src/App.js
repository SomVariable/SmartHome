import React, { useEffect } from 'react';
import {BrowserRouter} from "react-router-dom"
import { useDispatch} from 'react-redux';
import { auth } from './action/user';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [])
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Content />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
