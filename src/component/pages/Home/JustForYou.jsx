/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStarts from "react-rating-stars-component"
export default function JustForYou ({image,reguler,price, name})  {
 
    const options = {
        edit:false,
        size:window.innerWidth < 600 ? 14 : 16,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:4,
        isHalf :true
      }
      const textMobail = {
        size : window.innerWidth < 377 ? name.slice(0, 18) + ".." : name.slice(0,40)+ "..",
   
      }
        
  return (
    <div className="cardItem">

        <div className='productImage'>
            <img src={image} alt='' className=""/>

            <div className='OfferConatainer'>
                                    <div className='OfferContant'>20%</div>
                       </div>
        </div>

        <div className='ProductName'>
            <h4 className=''>{textMobail.size}</h4>
        </div>

        <div className='ProductCardStart'>
        <ReactStarts {...options} /> 
        <div className='MallConatainer'>
                <div className='MallContant'>
                    <img src='https://img.alicdn.com/imgextra/i2/O1CN0192vi4w22yc3IH1uKk_!!6000000007189-2-tps-192-96.png' />
                </div>
             </div>

             <div className='MartConatainer'>
                <div className='MallContant'>
                    <img src='https://img.alicdn.com/imgextra/i1/O1CN01KudGev1Gpot9jcneM_!!6000000000672-2-tps-192-96.png ' />
                </div>
             </div>
        
        </div>

        <div className='PriceContainer'>

            <div className='ProductPrice'>
                <h4 className=''>${price}</h4>
            </div>

            <div className='ProductPrice'>
                <h4 className=''>was ${reguler}</h4>
            </div>

        </div>
        
    </div>
  )
  
}

 
