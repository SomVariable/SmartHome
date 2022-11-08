import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthorizationPage from '../../pages/AuthorizationPage/AuthorizationPage'
import HomePage from '../../pages/HomePage/HomePage'
import MembersPage from '../../pages/MembersPage/MembersPage'
import RoomsPage from '../../pages/RoomsPage/RoomsPage'
import StatisticPage from '../../pages/StatisticPage/StatisticPage'
import style from "./style.module.scss"

function Routes() {
  return (
    <>
    <div className={style.container}>
      <Switch>
        <Route exact  path = "/" component = {HomePage}/>
        <Route path = "/members" component = {MembersPage}/>
        <Route path = "/rooms" component = {RoomsPage}/>
        <Route path = "/statistics" component = {StatisticPage}/>
        <AuthorizationPage />
      </Switch>
    </div>
  </>
  )
}

export default Routes