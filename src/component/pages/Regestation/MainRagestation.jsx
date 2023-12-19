/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderSecend } from '../HeaderCustom/HeaderSecend'

export const MainRagestation = () => {
  return (
    <div id='root--regestation'>
        <HeaderSecend />
        <Outlet />
    </div>
  ) 
}
