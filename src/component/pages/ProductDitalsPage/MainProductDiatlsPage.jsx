/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Foter from '../../layout/Footer/Foter'
import { HeaderSecend } from '../HeaderCustom/HeaderSecend'

function MainProductDiatlsPage ()  {
  return (
    <div>
       <HeaderSecend />
       <Outlet />
       <Foter />
    </div>
  )
}

export default MainProductDiatlsPage
