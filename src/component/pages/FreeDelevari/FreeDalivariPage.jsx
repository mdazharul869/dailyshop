/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { GrNext, GrPrevious } from "react-icons/gr"
import { Link, useParams } from "react-router-dom"
import AdsImage from '../HeaderCustom/AdsImage'
import LeatestProduct from '../HeaderCustom/LeatestProduct'
import RandomCategory from './RandomCategory'
import ReacomandedProduct from './ReacomandedProduct'

function FreeDalivariPage  ()  {
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
      img: "https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg"
  },
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
    img: "https://static-01.daraz.com.bd/p/b07e2f351171f031e99232b05bb2ba2e.jpg_200x200q75-product.jpg_.webp"
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

{/* ----------------Md azharul creator this---------------md-axharul---------------------------*/}

        {/* Category 2nd Category Chosse start---------------md Azharul---------------- */}

        <div className="fastCategory bg-Change">
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
        <div className=''>
          <div className=''>

            <AdsImage />

            <LeatestProduct />
      
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




      </div>
    </div>
  )
}

export default FreeDalivariPage