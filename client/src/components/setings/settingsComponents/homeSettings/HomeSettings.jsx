import React, { useRef } from 'react'
import { useState } from 'react';
import { Popover } from '../../../modal/Popover';
import style from "./style.module.scss"


function HomeSettings() {
  const [modules, setModulesOpened] = useState(false);
  const homeSettingsRef = useRef()
  debugger
  return (
    <div className = {style.homeSettings} ref = {homeSettingsRef}>
      <Popover opened={modules} onClose={() => setModulesOpened(false)} parent = {homeSettingsRef.current}> 
        <div className="">
          <p>Humidity</p>
          <p>Temperature</p>
          <p>Light</p>
          <p>Humidity</p>
          <p>Temperature</p>
          <p>Light</p>
          <p>Humidity</p>
          <p>Light</p>
          <p>Humidity</p>
          <p>Light</p>
        </div>
      
      </Popover>
      <button className = {style.moduleAdditionBtn} onClick = {() => setModulesOpened(true)}>add module</button>
    </div>
  )
}

export default HomeSettings