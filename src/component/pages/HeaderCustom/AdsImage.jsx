/* eslint-disable no-unused-vars */
import React from 'react'
import "./AdsImage.scss"
import img2 from "./image/Ads/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg"

const AdsImage = () => {
  return (
    <div className='AdsSection'>
        <div className='container'>
            <div className='AdsConatiner'>
                <div className='AdsContant'>
                    <div className='AdsImage'>
                      <img src={img2} alt='' />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AdsImage
