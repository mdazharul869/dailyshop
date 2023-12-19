/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { GrNext, GrPrevious } from "react-icons/gr"
import { LuAlignLeft } from "react-icons/lu"
import ReactStarts from "react-rating-stars-component"
import { Link, useParams } from "react-router-dom"
import { BestMachProduct } from './BestMachProduct'
import "./CategoryPage.scss"
import CategoryProducts from './CategoryProducts'
import RandomCategory from './RandomCategory'
import ReacomandedProduct from './ReacomandedProduct'
import img1 from "./image/LatestProduct/cloth1.png"
import img2 from "./image/LatestProduct/cloth2.png"
import img3 from "./image/LatestProduct/cloth3.png"
import img4 from "./image/LatestProduct/cloth4.png"
import img5 from "./image/LatestProduct/phone1.png"
import img6 from "./image/LatestProduct/phone2.png"
import img7 from "./image/LatestProduct/phone3.png"
import img8 from "./image/LatestProduct/shirt1.png"
import img9 from "./image/LatestProduct/shirt2.png"
import img10 from "./image/LatestProduct/shirt3.png"

function CategoryPage  ()  {
  const data = [

    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/c6aa4e594fcf3fd9fef4e2f4bebf7dbf.jpg"
    }
    ,
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/brand/f2e2c20cb8fa797bec5cc637eab2e662.jpg"
    }
    ,
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/a09d2c25700c21bb4260c7cd1e0c3135.jpg"
    }
    ,
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/brand/singer_10119d098be0b3abc6056e4eeacb187b.jpg"
    }
    ,
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/brand/walton_a03b0e581a84c5bb09fbe317cb53e880.jpg"
    },
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/4e9a555bec8ce4e11e9dd3f6ac772e5b.jpg"
    },
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/ffcf343471dee4fc40a816484a5938e9.jpg"
    },
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/brand/apollo.jpg"
    },
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/cfe538c17b3d569eeb45c111b64fe06a.jpg"
    },
    {
        name : "Free Delevari",
        img : "https://static-01.daraz.com.bd/p/a62039f7306afcf9e0b102ae9d9556e7.jpg"
    },


    
]
const latestproducts = [
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img1,
   
  },
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img2,
      freeshiping : "Free Shiping"
  },
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img3
      
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img4,
      freeshiping : "Free Shiping"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img5,
      freeshiping : "Free Shiping"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img6
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img7,
      freeshiping : "Free Shiping"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img8
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img9
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: img10
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
  },
  {
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/2b48bd952180d0415ee6fb39af6baa7e.jpg_200x200q80-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://bd-live-21.slatic.net/kf/Sd87fe719b9b64a68b6cda8953fe96419Q.jpg"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/c7a4563ac63db823905fe759abf920b4.jpg_200x200q75-product.jpg_.webp"
}
,
{
    name : "I phone 15 pro max (bestDial) Phone Category is best",
    price : 125,
    reguler : 100,
    img: "https://static-01.daraz.com.bd/p/028b3598f5e538568ee7f2cb8c75885e.jpg_200x200q75-product.jpg_.webp"
}
,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://static-01.daraz.com.bd/p/6ed41de0f7aabf47309bc8fecfedc0b4.jpg"
  },
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://static-01.daraz.com.bd/p/39f7424ef5c72851760eb09d81b99083.jpg_200x200q75-product.jpg_.webp"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://bd-live-21.slatic.net/kf/Sfa0166639231427985b9f69f7a6845e4P.jpg"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://static-01.daraz.com.bd/p/d9c923ff6c32c631f082bd478db063d2.jpg_200x200q75-product.jpg_.webp"
  }
  ,
  {
      name : "I phone 15 pro max (bestDial) Phone Category is best",
      price : 125,
      reguler : 100,
      img: "https://static-01.daraz.com.bd/p/1200862fdab259e261695433537ed500.jpg_200x200q75-product.jpg_.webp"
  }
  ,
]

const promotion = [
  {
    img : "https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
    name: "Free Delevari"
  },
  {
    img : "https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
    name: "Best Dials"
  },
  {
    img : "https://img.alicdn.com/imgextra/i4/O1CN01Tp04IC1x3IWhZt8RK_!!6000000006387-2-tps-72-72.png",
    name: "Daily Varified"
  }
]



const options = {
  edit:false,
  size:window.innerWidth < 600 ? 15 : 20,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:5,
  isHalf :true
}
const options1 = {
  edit:false,
  size:window.innerWidth < 600 ? 15 : 20,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:4,
  isHalf :true
}
const options2 = {
  edit:false,
  size:window.innerWidth < 600 ? 15 : 20,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:3,
  isHalf :true
}
const options3 = {
  edit:false,
  size:window.innerWidth < 600 ? 15 : 20,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:2,
  isHalf :true
}
const options4 = {
  edit:false,
  size:window.innerWidth < 600 ? 15 : 20,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:1,
  isHalf :true
}
const {name} = useParams()




const [openFilter, setFilter] = useState(false)
const ToggleEvent = openFilter ? " ActiveFilter" : ""

const OpenMenuCalssAdd = () =>{
  setFilter(!openFilter)
}
    // slider button slide latest product Slider 
    const HomeProductSlidebtnPreLatest = useRef()

    const HomeProductbtnPreLatest = () =>{
        HomeProductSlidebtnPreLatest.current.scrollLeft -= 250  
    }
  
    
    const HomeProductbtnNextLatest = () =>{
        HomeProductSlidebtnPreLatest.current.scrollLeft += 250  
   }
  //
  return (
    <div className='CategorySection'>
      <div className='container'>
        {/* Category header Page start---------------md Azharul---------------- */}
        <div className='CategoryHeaderShow'>
          <div className='categoryHeaderContantShow'>
            <Link > Home <span>/</span> </Link>
            <Link >{name} <span>/</span></Link>
           
          </div>
        </div>
        {/* Category header Page end---------------md Azharul---------------- */}

{/* ----------------Md axharul creator this---------------md-axharul---------------------------*/}

        {/* Category 2nd Category Chosse start---------------md Azharul---------------- */}

        <div className="fastCategory">
                    <div className="fastCategoryContant">

                    {
                        data && data.map((el, index)=>{
                            return(
                                <div key={index} className="categoryCard">
                                    <RandomCategory
                                       name ={el.name}
                                       img ={el.img}                                  
                                    />
 
                                 </div>  
                            )
                        })
                    }
                    </div>

        </div> 

        {/* Category 2nd Category Chosse end---------------md Azharul---------------- */}

{/* ----------------Md axharul creator this---------------md-axharul---------------------------*/}

        {/* Category main Page Start---------------md Azharul---------------- */}
        <div className='categoryPage'>
          <div className='categoryPagePart'>

        {/* Category main Page LeftSide Start---------------md Azharul---------------- */}
            <div className='categoryLeftSidePage'>
              <div className='categoryLeftSidePageContant'>

              <div className='promotionSectorTittle'>
                      <h2>Filters</h2>
                    </div>
                
                {/* Promotion Part----------------start  */}          
                  <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Promotion & Services</h4>
                      </div>
                      <div className='promotionItems'>

                      {
                        promotion && promotion.map((el, index) =>{
                          return(
                            <div key={index} className='promotionCard'>
                              <Link className='promotionItem'>
                                  <img src={el.img} alt='' />
          
                                  <span>{el.name}</span>
                              </Link>
                          </div>
                          )
                        })
                      }
                    
                    </div>



                    </div>
                  </div>
                {/* Category part--------------start */}

               {/* Category Part Part----------------start  */}          
                  <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Sub Categories</h4>
                      </div>

                      <div className='CategoryCardItems'>

                       
                            <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Table</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Mini Fan</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Phone</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Vagetable</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>I Care</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Woman FasHon Live Stale</span>
                              </Link>
                          </div>

                       
        
                       
                   
                    </div>



                    </div>
                  </div>
               {/* Category Part end----------------start  */}          

               {/* Star Part Part----------------start  */}          
               <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Review</h4>
                      </div>

                      <div className='reviewCardItems'>

                       
                            <div  className='reviewCard'>
                              <Link className='reviewItem'>
                            
                                  <span><ReactStarts {...options} /></span>
                              </Link>
                          </div>

                          <div  className='reviewCard'>
                              <Link className='reviewItem'>
                            
                                  <span><ReactStarts {...options1} /></span>
                              </Link>
                          </div>

                          <div  className='reviewCard'>
                              <Link className='reviewItem'>
                             
                              <span><ReactStarts {...options2} /></span>

                              </Link>
                          </div>

                          <div  className='reviewCard'>
                              <Link className='reviewItem'>
                              <span><ReactStarts {...options3} /></span>
                            
                               
                              </Link>
                          </div>

                          <div  className='reviewCard'>
                              <Link className='reviewItem'>
                              <span><ReactStarts {...options4} /></span>

                              </Link>
                          </div>

      
                       
        
                       
                   
                    </div>



                    </div>
                  </div>
               {/* proce Star Part end----------------start  */}          

               {/* Color Part----------------start  */}          
               <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Color</h4>
                      </div>
                      <div className='ColorCardItems'>

                       
                            <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='red'></i>
                                  <span>red</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='green'></i>
                                  <span>green</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='white'></i>
                                  <span>white</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i></i>
                                  <span>red</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='yellow'></i>
                                  <span>yellow</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='blue'></i>
                                  <span>blue</span>
                              </Link>
                          </div>

                          <div  className='ColorCard'>
                              <Link className='CardItem'>
                                <i className='parple'></i>
                                  <span>parple</span>
                              </Link>
                          </div>

        
                       
                   
                    </div>



                    </div>
                </div>
               {/* Color Part----------------start  */}          

              {/* Product Size PArt Start */}
              <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Size</h4>
                      </div>
                      <div className='ColorCardItems'>

                       
                            <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Xl</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Ml</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>L</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>XY</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>Y</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                                <i className='size'></i>
                                  <span>blue</span>
                              </Link>
                          </div>

                       
        
                       
                   
                    </div>



                    </div>
                </div>
               {/* Product size Part end---------------start  */}          

                {/* Location part  start*/}

                <div className='promotionsSector'>
                    <div className='promotionPart'>

                      <div className='promotiontittle'>
                        <h4>Location</h4>
                      </div>
                      <div className='ColorCardItems'>

                       
                            <div  className='SizeCard'>
                              <Link className='CardItem'>
                             
                                  <span>Bangladesh</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                            
                                  <span>Cina</span>
                              </Link>
                          </div>

                          <div  className='SizeCard'>
                              <Link className='CardItem'>
                            
                                  <span>Thailand</span>
                              </Link>
                          </div>



                       
        
                       
                   
                    </div>



                    </div>
                </div>

                {/* Location Part Od */}

              </div>
            </div>

        {/* Category main Page RightSide Start---------------md Azharul---------------- */}

            <div className='categoryPageRightSide '>
             <div className=''>
                 {/* Just For You Sale Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
           <div className="CategoryProductContainer">

                    {/* Category main Page LeftSide Start---------------md Azharul---------------- */}

                    {
                      openFilter && (
                        <div className='categoryLeftSidePageMobailMenu'>
                        <div className='categoryLeftSidePageContant'>
          
                        <div className='promotionSectorTittle'>
                                <h2 onClick={()=>setFilter(false)}>Filters</h2>
                              </div>
                          
                          {/* Promotion Part----------------start  */}          
                            <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Promotion & Services</h4>
                                </div>
                                <div className='promotionItems'>
          
                                {
                                  promotion && promotion.map((el, index) =>{
                                    return(
                                      <div key={index} className='promotionCard'>
                                        <Link className='promotionItem'>
                                            <img src={el.img} alt='' />
                    
                                            <span>{el.name}</span>
                                        </Link>
                                    </div>
                                    )
                                  })
                                }
                              
                              </div>
          
          
          
                              </div>
                            </div>
                          {/* Category part--------------start */}
          
                         {/* Category Part Part----------------start  */}          
                            <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Sub Categories</h4>
                                </div>
          
                                <div className='CategoryCardItems'>
          
                                 
                                      <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Table</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Mini Fan</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Phone</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Vagetable</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>I Care</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Woman FasHon Live Stale</span>
                                        </Link>
                                    </div>
          
                                 
                  
                                 
                             
                              </div>
          
          
          
                              </div>
                            </div>
                         {/* Category Part end----------------start  */}          
          
                         {/* Star Part Part----------------start  */}          
                         <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Review</h4>
                                </div>
          
                                <div className='reviewCardItems'>
          
                                 
                                      <div  className='reviewCard'>
                                        <Link className='reviewItem'>
                                      
                                            <span><ReactStarts {...options} /></span>
                                        </Link>
                                    </div>
          
                                    <div  className='reviewCard'>
                                        <Link className='reviewItem'>
                                      
                                            <span><ReactStarts {...options1} /></span>
                                        </Link>
                                    </div>
          
                                    <div  className='reviewCard'>
                                        <Link className='reviewItem'>
                                       
                                        <span><ReactStarts {...options2} /></span>
          
                                        </Link>
                                    </div>
          
                                    <div  className='reviewCard'>
                                        <Link className='reviewItem'>
                                        <span><ReactStarts {...options3} /></span>
                                      
                                         
                                        </Link>
                                    </div>
          
                                    <div  className='reviewCard'>
                                        <Link className='reviewItem'>
                                        <span><ReactStarts {...options4} /></span>
          
                                        </Link>
                                    </div>
          
                
                                 
                  
                                 
                             
                              </div>
          
          
          
                              </div>
                            </div>
                         {/* proce Star Part end----------------start  */}          
          
                         {/* Color Part----------------start  */}          
                         <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Color</h4>
                                </div>
                                <div className='ColorCardItems'>
          
                                 
                                      <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='red'></i>
                                            <span>red</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='green'></i>
                                            <span>green</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='white'></i>
                                            <span>white</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i></i>
                                            <span>red</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='yellow'></i>
                                            <span>yellow</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='blue'></i>
                                            <span>blue</span>
                                        </Link>
                                    </div>
          
                                    <div  className='ColorCard'>
                                        <Link className='CardItem'>
                                          <i className='parple'></i>
                                            <span>parple</span>
                                        </Link>
                                    </div>
          
                  
                                 
                             
                              </div>
          
          
          
                              </div>
                          </div>
                         {/* Color Part----------------start  */}          
          
                        {/* Product Size PArt Start */}
                        <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Size</h4>
                                </div>
                                <div className='ColorCardItems'>
          
                                 
                                      <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Xl</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Ml</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>L</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>XY</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>Y</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                          <i className='size'></i>
                                            <span>blue</span>
                                        </Link>
                                    </div>
          
                                 
                  
                                 
                             
                              </div>
          
          
          
                              </div>
                          </div>
                         {/* Product size Part end---------------start  */}          
          
                          {/* Location part  start*/}
          
                          <div className='promotionsSector'>
                              <div className='promotionPart'>
          
                                <div className='promotiontittle'>
                                  <h4>Location</h4>
                                </div>
                                <div className='ColorCardItems'>
          
                                 
                                      <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                       
                                            <span>Bangladesh</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                      
                                            <span>Cina</span>
                                        </Link>
                                    </div>
          
                                    <div  className='SizeCard'>
                                        <Link className='CardItem'>
                                      
                                            <span>Thailand</span>
                                        </Link>
                                    </div>
          
          
          
                                 
                  
                                 
                             
                              </div>
          
          
          
                              </div>
                          </div>
          
                          {/* Location Part Od */}
          
                        </div>
                      </div>
                      )
                    }


                <div className="CategoryPageProductTittle">
                            <div className='CatrgoryPageTaittleConatnt'>
                            <h4 className=""> {name} For You</h4>
                            <span className="">14500 Products Found</span>
                            </div>

                            <div className='SearchCategoryPage'>
                              <input type='text' placeholder='Inter Your Search Item' />
                            </div>

                            <div className='ProductSortCategoryPage'>
                            <span onClick={OpenMenuCalssAdd} className="iconheader"><LuAlignLeft /></span>
                            </div>
                        </div>
                    <div className="CategoryProductContant">



                        {
                            latestproducts && latestproducts.map((el, index)=>{
                                return (
                                    <div key={index} className="CategoryproductCard">

                                        <CategoryProducts
                                            id={el.id}
                                            name={el.name}
                                            image = {el.img}
                                            price={el.price}
                                            reguler={el.reguler}
                                        />
        
                                    </div>

                                )
                            })
                        }



                    </div>
                </div>
     {/* Just For You freash Sale product page End-------Md Azharul Creator-------Md-Azharul---- */}

                
              </div>
            </div>

          </div>
        </div>   
        {/* Category main Page end---------------md Azharul---------------- */}

{/* ----------------Md axharul creator this---------------md-axharul---------------------------*/}

      
{/* ---------------------------Md Azharul------------------------------------------------ */}

            {/* latest Products page Start-------Md Azharul Creator-------Md-Azharul----  */}
            <div className="latestProductContainer">                  
                <div className="latestProductTittle">
                            <h2 className="">Your Recomanded</h2>
                </div>

            {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }
                <div  onClick={HomeProductbtnPreLatest} className="HomeProductSlidebtnPre">
                    <i className="" > <GrPrevious /></i>
                </div>
                <div onClick={HomeProductbtnNextLatest} className="HomeProductSlidebtnNext">
                    <i > <GrNext /></i>
                </div>
             {/* Laptob pc ---for Button slider------------createor ---md Azharul */ }

            {/* All Mobail ---for Button slider------------createor ---md Azharul */ }
                <div  onClick={HomeProductbtnPreLatest} className="HomeProductSlidebtnPreMobail">
                    <i className="" > <GrPrevious /></i>
                </div>
                <div onClick={HomeProductbtnNextLatest} className="HomeProductSlidebtnNextMobail">
                    <i > <GrNext /></i>
                </div>
             {/* All Mobail ---for Button slider------------createor ---md Azharul */ }

                    <div ref={HomeProductSlidebtnPreLatest} className="latestProductContant">



                        {
                            latestproducts && latestproducts.map((el, index)=>{
                                return (
                                    <div key={index} className="productCard">

                                        <ReacomandedProduct
                                            id={el.id}
                                            name={el.name}
                                            image = {el.img}
                                            price={el.price}
                                            reguler={el.reguler}
                                        />
        
                                </div>

                                )
                            })
                        }



                    </div>
                </div>
            {/* Latest product page End-------Md Azharul Creator-------Md-Azharul---- */}

            {/* colorful */}

            {/* Just For You All Product Suggested Product */}
            <div className='SuggestedProductsSection'>
              <div className='SuggestedProductContainer'>

                <div className='SuggestedTittleProductContainer'>
                  <div className='SuggestedTittleContant'>

                    <div className='SuggestedTittleFastPart'>
                        <h2>Best Match

                        <span className='one1'></span>
                             <span className='two2'></span>
                             <span className='three3'></span>
                             <span className='four4'></span>
                          

                        </h2>
                    </div>

                    <div className='SuggestedTittleSecendPart'>
                          <h2>Product
                             <span className='one'></span>
                             <span className='two'></span>
                             <span className='three'></span>
                             <span className='four'></span>
                          
                          </h2>
                    </div>

                  </div>
                </div>


                <div className='SuggestedProductContant'>
                  <div className='SuggestedProductContantItems'>

                    {
                      latestproducts && latestproducts.map((el, index)=>{
                          return (
                            <div key={index} className="BestmatchProductCard">
                          
                            <BestMachProduct 
                            freeshiping = {el.freeshiping}
                            />
  
                            
      
                         </div>
                          )
                      })
                    }

                  </div>

                </div>
              </div>
            </div>
            {/* Just For You All Product Suggested Product */}



      </div>
    </div>
  )
}

export default CategoryPage