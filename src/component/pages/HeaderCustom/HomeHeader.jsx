/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { HeaderSecend } from './HeaderSecend'
import "./HomeHeader.scss"
import BannerImage1 from "./image/Ads/images (5).jpeg"
import { default as BannerImage3, default as BannerImage6 } from "./image/Ads/images (8).jpeg"
import { default as BannerImage2 } from "./image/banner-1.png"
import BannerImage5 from "./image/image1.jpg"
import BannerImage4 from "./image/image2.jpg"




function HomeHeader  ()  {


         // slider button slide latest product Slider 
         const HomeProductSlidebtnPreFresh = useRef()

         const HomeProductbtnPreFresha = () =>{
            const d =  document.querySelector("#HomeheaderParFastsectionContantCount").children[0].offsetWidth
            
            //console.log(HomeProductSlidebtnPreFresh.current.scrollLeft += d  )
           console.log(HomeProductSlidebtnPreFresh.current.scrollLeft += d  )
        
         }
         const HomeProductbtnPreFreshb = () =>{
            const d =  document.querySelector("#HomeheaderParFastsectionContantCount").children[0].offsetWidth
            
            //console.log(HomeProductSlidebtnPreFresh.current.scrollLeft += d  )
           console.log(HomeProductSlidebtnPreFresh.current.scrollLeft -= d  )
        
         }
         


         window.addEventListener("load" , () => {
            const e =  document.querySelector("#HomeheaderParFastsectionContantCount")
            const d =  document.querySelector("#HomeheaderParFastsectionContantCount").children[0].offsetWidth

            const a =  document.querySelector(".HomeheaderParFastsectionContant").childNodes.length
            console.log(a)
           setTimeout(() => {
                e.scrollLeft += d
            }, 3000)

              setTimeout(() => {
                e.scrollLeft += d
            }, 9000)

            
            
         })

        
        

        
  return (
    <div>
        <HeaderSecend />
         <div className='HomeHeaderSection'>
            <div className='container'>
                <div className='HomeHeadePartContainer'>
                    <div className='HomeHeaderPartContant'>

                        <div className='HomeheaderParFastsection'>
                           <div onClick={HomeProductbtnPreFresha}  className='bannarImageChangeIcon'></div>
                             <div onClick={HomeProductbtnPreFreshb} className='bannarImageChangeIcon2'></div>

                            <div ref={HomeProductSlidebtnPreFresh} id='HomeheaderParFastsectionContantCount'  className='HomeheaderParFastsectionContant'>

                                <img  src={BannerImage1} alt='' />
                                <img src={BannerImage6} alt='' />
                                <img  src={BannerImage4} alt='' />

                             
                            </div>

                        </div>

                        <div className='HomeheaderPartSecendsection'>
                            <div className='HomeheaderPartSecendsectionConatiner'>
                                
                                <div className='FastImageSection ImageContainer'>
                                    <div className='imageDev'>
                                        <img src={BannerImage2} alt='' />
                                    </div>
                                </div>

                                <div className='SecendmageSection ImageContainer'>
                                    <div className='imageDev2'>
                                    <img src={BannerImage3} alt='' />

                                    </div>   
                                </div>

                                <div className='ThirdImageSection ImageContainer'>
                                    <div className='imageDev3'>
                                    <img src={BannerImage4} alt='' />

                                    </div>           
                                </div>

                                <div className='FourImageSection ImageContainer'>
                                    <div className='imageDev4'>
                                    <img src={BannerImage5} alt='' />

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

export default HomeHeader
