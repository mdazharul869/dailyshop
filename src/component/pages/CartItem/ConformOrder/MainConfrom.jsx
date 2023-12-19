/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderSecend } from '../../HeaderCustom/HeaderSecend'
import "./MainConfrom.scss"

export function MainConfrom  ()  {
  return (
    <div id='root--ordersection'>
        <HeaderSecend />
        <Outlet />
    </div>
  )
}
