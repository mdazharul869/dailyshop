/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderSecend } from '../../HeaderCustom/HeaderSecend'
import "./MainShipping.scss"

export const MainShipping = () => {
  return (
    <div className='MainShippin' id='root--shiping'>
        <HeaderSecend />

        <Outlet />
    
    </div>
  )
}
