/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function RandomCategory ({img, name})  {
  return (
    <>
    <Link  className="cartA">
            <div className="cardItem">
                <img src={img} alt="" className='imageFastCategory' />
       
            </div>
    </Link>
    </>
  )
}

export default RandomCategory