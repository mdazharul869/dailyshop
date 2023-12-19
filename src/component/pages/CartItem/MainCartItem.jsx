/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import img1 from "../Home/image/LatestProduct/cloth2.png";
import './MainCartItem.scss';


export function MainCartItem  () {

    const [openCart , setCartpart] = useState(false)
    

    const openChartToggole = () =>{
        setCartpart(!openCart)

     
    }
  return (
  
    <div onClick={openChartToggole} className='CartCarCle'>
    
    {
        openCart && (
            
    <div className='CartItemSection'>
        <div className='CartItemPart'>
            <div className='CartitemContainer'>

                <div className='TittleCart'>
                    <div className='TittleCartIfo'>
                        <span> Cart Items</span>
                    </div>
                </div>

                <div className='CartitemConatant' >

                    <div className='CartItemImageContainer'>
                        <img src={img1} alt='' />
                    </div>

                    <div className='CartItemInfoContant'>

                        <div className='CartItemTittleName'>
                            <h4>Men Fashon</h4>
                        </div>

                        <div className='CartItemDescription'>
                            <span>Tk 320</span>
                        </div>

                        <div className='CartItemRemove'>
                            <button>Remove</button>
                        </div>


                    </div>

                </div>

                    <div className='CartitemConatant' >

                    <div className='CartItemImageContainer'>
                        <img src={img1} alt='' />
                    </div>

                    <div className='CartItemInfoContant'>

                        <div className='CartItemTittleName'>
                            <h4>Men Fashon</h4>
                        </div>

                        <div className='CartItemDescription'>
                            <span>Tk 320</span>
                        </div>

                        <div className='CartItemRemove'>
                            <button>Remove</button>
                        </div>


                    </div>

                </div>


                   <div className='CartitemConatant' >

                    <div className='CartItemImageContainer'>
                        <img src={img1} alt='' />
                    </div>

                    <div className='CartItemInfoContant'>

                        <div className='CartItemTittleName'>
                            <h4>Men Fashon</h4>
                        </div>

                        <div className='CartItemDescription'>
                            <span>Tk 320</span>
                        </div>

                        <div className='CartItemRemove'>
                            <button>Remove</button>
                        </div>


                    </div>

                </div>


                
                <div className='CartItemCekOut'>
                    <Link to={"/shipping/ditals"}>Cekout <span className='CekoutTotal_amonut'> 400</span> </Link>
                </div>
            </div>
        </div>
    </div>
        )
    }

   

            <div  className='CartItemCarCle'>
            <div className='CartitemContainer'>
                <div className='IconsCartAbaibale'>
                    <span><BsCart3 /></span>
                </div>
                <div className='CartShowButton'>
                    <button>Cart (10)</button>
                </div>
                <div className='PriceTotal'>
                    <span>5050</span>
                </div>
            </div>
        </div>
    


    </div>



  )
}
