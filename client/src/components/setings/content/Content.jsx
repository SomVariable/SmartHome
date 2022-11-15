import React from 'react'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import style from "./style.module.scss"


function Content({currentComponent, chooseContent}) {

 
  return (
    chooseContent(currentComponent)
  )
}

export default Content