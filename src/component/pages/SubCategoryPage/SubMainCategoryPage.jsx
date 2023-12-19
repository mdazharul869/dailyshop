/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Foter from '../../layout/Footer/Foter'
import Header from '../../layout/Header/Header'
import MainMessage from '../Message/MainMessage'

export default function SubMainCategoryPage  () {
  return (
    <>
      <div className=''>
        <Header />
        <MainMessage />
        <Outlet />
        <Foter />
      </div>
    </>
  )
}
