/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function FastCategory ({name, img}) {


  return (
    <>
    <Link to={`/dalivari/${name}`}  className="cartA">
            <div className="cardItem">
                <img  src={img} alt="" id='imag' className='imageFastCategory' />
                <h5 className='fastcategorytittle'>{name.length > 14 ? name.slice(0, 12) + ".." : name }</h5>
            </div>
    </Link>
    </>
  )
}
