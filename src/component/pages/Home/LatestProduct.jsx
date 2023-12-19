/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactStarts from "react-rating-stars-component"
import { Link } from 'react-router-dom'

export default function LatestProduct({mall,reguler,price, name, imageArray , loading}) {

    const [hover, setHover] = useState()

    
    const options = {
        edit:false,
        size:window.innerWidth < 600 ? 14 : 16,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:4,
        isHalf :true
      }

        
      const textMobail = {
        size : window.innerWidth < 450 ? name.slice(0, 25) + ".." : name.slice(0,40)+ "..",
   
      }





     

  return (
    <Link to={`/ditals-products/${name}/231`}>
    <div className="cardItemLatestProduct" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
    


        {
            imageArray && imageArray.map((el ,index) =>{

                return (
                
                    hover ? (
                        <div key={index}  className={`productImage ${index === 1 ? "ImgeBlock" : "Imagenone" }  `}>
                       <div className='OfferConatainer'>
                                    <div className='OfferContant'>20%</div>
                       </div>
                
                
                        <img  src= {index === 1 ? el.img : ""} alt='' className=""/>
                        </div>
                    ) : (
                        <div key={index}  className={`productImage ${index === 0 ? "ImgeBlock" : "Imagenone" }  `}>

                   
                      <div className='OfferConatainer'>
                                    <div className='OfferContant'>20%</div>
                    </div>
                
                
                        <img  src= {index === 0 ? el.img : ""} alt='' className=""/>
                        </div>
                    )
                

                )
               
            })
        } 
         


        <div className='ProductName'>
            <h4 className={``} {...textMobail}>{textMobail.size }   </h4>
        </div>

        <div className='ProductCardStart'>
        <ReactStarts {...options} /> 

        {
            mall && (
                <>
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
                </>
            )
        }




         </div>

        <div className='PriceContainer'>

            <div className='FreeDelevariContainerPrice'>
                <div className='FreeDalevariConatent'>
                    <img src='https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png' />
                </div>
            </div>

            <div className='ProductPrice'>
                <h4 className=''>${price}</h4>
            </div>

            <div className='ProductPrice'>
                <span className='RegularPrice'> ${reguler}</span>
            </div>

        </div>
        
    </div>
    </Link>
  )
}
