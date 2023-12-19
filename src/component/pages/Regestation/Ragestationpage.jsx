/* eslint-disable no-unused-vars */
import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineChatAlt2 } from "react-icons/hi";



const Ragestationpage = () => {
  return (
    <div>
          <div className='LoginSection'>
        <div className='container'>
          <div className='ShippingContainer'>


            <div className='ShippingSecendPart'>
                        <div className='ShippingInfoPartContainer'>

                            <div className='ShippingInfoConatant'>

                                <div className='ShippingInfotittle'>
                                    <h4>Regestation Ditals Please</h4>
                                </div>

                                <div className='ShipinggivenDitalsInput'>

                                    <div className='ShipingDitalsIputButton'>

                                        <button>   <span><BsFacebook /></span>Facebook</button>
                                    </div>

                                    <div className='ShipingDitalsIputButtonFoogle'>

                                        <button>   <span><FcGoogle /></span>Goggle</button>
                                    </div>

                                    <div className='ShipingDitalsIputButtonFoogle'>
                                        or      
                                    </div>
                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Your Fast Name' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Your Last Name' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='number' placeholder='Enter Your Phone' />
                                    </div>

     

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Your Email' />
                                    </div>

                                    <div className='ShipingDitalsIput'>
                                        <div className='IconsShiping'>
                                            <span><HiOutlineChatAlt2 /></span>
                                        </div>
                                        <input type='text' placeholder='Enter Password' />
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
  )
}

export default Ragestationpage
