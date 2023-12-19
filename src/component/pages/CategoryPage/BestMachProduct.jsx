/* eslint-disable no-unused-vars */
import React from 'react'
import ReactStarts from "react-rating-stars-component"
import img2 from "./image/LatestProduct/cloth2.png"
const options = {
    edit:false,
    size:window.innerWidth < 600 ? 14 : 20,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:4,
    isHalf :true
  }
// eslint-disable-next-line react/prop-types
export const BestMachProduct = ({freeshiping}) => {
  return (
    <div className="cardItemBestMachProduct">
        
    <div className='productImage'>
        <img src={img2} alt='' className=""/>

        <div className='OfferConatainer'>
        <div className='OfferContant'>20%</div>
            </div>
    </div>

    <div className='ProductName'>
        <h4 className=''>Vivo Y 20</h4>
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

    <div className='FreeDelevariContainerPrice'>
        <div className='FreeDalevariConatent'>
            <img src='https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png' />
        </div>
    </div>


        <div className='ProductPriceBestMachProduct'>
            <h4 className=''>$120</h4>
        </div>

        <div className='ProductPriceBestMachProduct'>
            <h4 className='line-thow'> $320</h4>
        </div>

    </div>


    <div className={`FreeShipingOOrBangladesh ${freeshiping ? "BlockDisplay" :"NoneDisplay"}`}>
      <span>{freeshiping}</span>
    </div>
    
</div>
  )
}
