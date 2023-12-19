/* eslint-disable no-unused-vars */
import React from 'react'
import SideBar from '../../component/SideBar/SideBar'
import Alluserspage from './Alluserspage'
import './MainAlluser.scss'

export function MainAllUser  () {
  return (
    <div className='AdminConatiner'>
    <SideBar />

    <div className='das'>

    <Alluserspage />
     
    </div>
 
  </div>
  

    
  )
}
