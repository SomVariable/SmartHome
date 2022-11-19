import React, { useRef } from 'react'
import { useState } from 'react';
import { Popover } from '../../../modal/Popover';
import Cheackbox from '../../../UI/Checkbox/Cheackbox';
import style from "./style.module.scss"


function HomeSettings() {
  const [modules, setModulesOpened] = useState(false);
  const homeSettingsRef = useRef()
  const closePopover = () => {
    setModulesOpened(false)
  }
  return (
    <div className = {style.homeSettings} ref = {homeSettingsRef}>
      <Popover opened={modules} onClose={closePopover} parent = {homeSettingsRef.current}> 
        <div className= {style.checkList}>
          <Cheackbox name = "temperature" content = "Temperature"/>
          <Cheackbox name = "light" content = "Light"/>
          <Cheackbox name = "temperature" content = "Temperature"/>
          <button onClick = {closePopover}>add checked</button>
        </div>
      </Popover>
      <button className = {style.moduleAdditionBtn} onClick = {() => setModulesOpened(true)}>add module</button>
    </div>
  )
}

export default HomeSettings