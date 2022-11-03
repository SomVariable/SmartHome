import React from 'react'
import { Route } from 'react-router-dom'
import AuthorizationPage from '../../pages/AuthorizationPage/AuthorizationPage'
import HomePage from '../../pages/HomePage/HomePage'
import MembersPage from '../../pages/MembersPage/MembersPage'
import RoomsPage from '../../pages/RoomsPage/RoomsPage'
import StatisticPage from '../../pages/StatisticPage/StatisticPage'

function Routes() {
  return (
    <>
        <Route path = "/members" component = {MembersPage}/>
        <Route path = "/rooms" component = {RoomsPage}/>
        <Route path = "/statistics" component = {StatisticPage}/>
        <AuthorizationPage />
        <Route path = "/" component = {HomePage}/>
    </>
  )
}

export default Routes