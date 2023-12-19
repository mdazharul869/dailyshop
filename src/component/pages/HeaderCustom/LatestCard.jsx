/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const LatestCard = ({name, img, index}) => {
    const [ishovering, sethover] = useState(false)

  return (
    <Link onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)} key={index} className=''>

    <div  className='itemImageConatiner'>


        <div className={`itemImageContant `}>
        <img  src={img} alt='' className={`${ishovering ? "bg-Change" : ""}`} />
        </div>
  

    </div>

    <div className='itemNameContainer'>
        <h4 className=''>{ window.innerWidth < 430 ? name.slice(0, 12) + ".." : name.slice(0,30)+ ".." } </h4>
    </div>

    <div className='itemPriceContainer'>
        <span className='CurrentPrice'>৳ ১০৪ </span>
        <span className='RegularPriceThis'>৳ ২০৪ </span>
    </div>

    <div className='AdCartBtn'>
        <button>Ad Cart</button>
    </div>

</Link>
  )
}
