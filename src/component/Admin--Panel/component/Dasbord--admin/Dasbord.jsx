/* eslint-disable no-unused-vars */
import React from 'react'
import { AdminHome } from '../Home/AdminHome'
import Navbar from '../navbar/Navbar'

export const Dasbord = () => {
  return (

    <>
    <div className='Dasbord-navbar'>
        <Navbar />
    </div> 

    <div className='Dasbord-navbar backgorundGradiant'>
        <AdminHome />
    </div> 
    </>



    

 
  )
}
