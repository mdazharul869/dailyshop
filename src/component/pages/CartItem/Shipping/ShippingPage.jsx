/* eslint-disable no-unused-vars */
import React from 'react';
import { HiOutlineChatAlt2 } from "react-icons/hi";


const ShippingPage = () => {
  return (
    <div className='ShippingPageSection'>
       <div className='conatiner'>
        <div className='ShippingContainer'>
            <div className='ShoppingContant'>

                <div className='Shippingitems'>

                    <div className='ShippingFastFast'>

                    </div>

                    <div className='ShippingSecendPart'>
                        <div className='ShippingInfoPartContainer'>

                            <div className='ShippingInfoConatant'>

                                <div className='ShippingInfotittle'>
                                    <h4>Shipping Ditals Please</h4>
                                </div>

                                <div className='ShipinggivenDitalsInput'>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Current Home' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Current State' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Current Location' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='number' placeholder='Enter Current State Code' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='number' placeholder='Enter Current Phone' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Current Country' />
                                    </div>
                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Current Country State' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                       
                                        <button>Save Info</button>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
       </div>
    </div>
  )
}

export default ShippingPage
