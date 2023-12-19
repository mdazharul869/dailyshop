/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import AllProductAdmin from './AllProduct--admin'


export default function AllProductPage  ()  {
  return (
    <>
    <div className='Dasbord-navbar'>
        <Navbar />
    </div> 

    <div className='Dasbord-navbar backgorundGradiantUser'>
        <AllProductAdmin />
    </div> 
    </>


  )
}


