/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Users from './Users--admin'

export default function Alluserspage  ()  {
  return (
    <>
    <div className='Dasbord-navbar'>
        <Navbar />
    </div> 

    <div className='Dasbord-navbar backgorundGradiantUser'>
        <Users />
    </div> 
    </>


  )
}


