/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./image/shoe1.png"

export const NotificationPop = () => {
  return (
    <div className='NotificationPopUp'>
        <div className='NotidicationContainer'>
            <Link className='NotificationContant'>
                
                <div className='ImageItemPopUp'>
                    <img src={img1} alt='' />
                </div>

                <div className='NotificationIfo'>
                    <div className='NotificationTittle'>
                        <h4>Vivo Y20</h4>
                    </div>
                    <div className='NotificationDescription'>
                        <p>This is a best for you you like this this is a best for you this is a good</p>
                    </div>
                </div>
            </Link>

        </div>
    </div>
  )
}
