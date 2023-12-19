/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Foter from '../../layout/Footer/Foter'
import { HeaderSecend } from '../HeaderCustom/HeaderSecend'
import MainMessage from '../Message/MainMessage'

export default function MainCategoryPage  () {
  return (
    <>
      <div className=''>
        <HeaderSecend />
        <MainMessage />
        <Outlet />
        <Foter />
      </div>
    </>
  )
}
