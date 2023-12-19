/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderSecend } from '../HeaderCustom/HeaderSecend'
import "./MainLogin.scss"

export function MainLogin () {
  return (
    <div id='Root--login'>
        <HeaderSecend />
        <Outlet />
    </div>
  )
}
