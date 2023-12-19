/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function PopularCategories({img, name}) {
  return (
    <>
        <Link to={`/category/${name}`} className='cartA'>
            <div className="cardItem">
                <img src={img} alt="" className='imageFastCategory' />
                <h5 className='fastcategorytittle'>{name.length > 14 ? name.slice(0, 12) + ".." : name }</h5>
            </div>
        </Link>
    </>
  )
}
