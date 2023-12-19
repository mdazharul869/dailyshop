/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LuAlignLeft } from "react-icons/lu";
import { TfiClose } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import MainSideBar from '../../layout/Header/SideBar--Public/MainSideBar';
import { MainCartItem } from '../CartItem/MainCartItem';
import "./HeaderSecend.scss";



export const HeaderSecend = () => {

    const [openTab , setOpenTab] = useState(false)

    function OpenMenuCalssAdd() {
      setOpenTab(openTab => !openTab)
    }
  
    const ToogleToOpenMenu = openTab ? "ActiveNav" : "CloseNav"
  
    const [openheaderFast, setHeaderFast] = useState(false)
  
    //   const toggleBtn =   "ActiveNavaa" 
      // slider button slide latest product Slider end
  
      window.addEventListener("scroll", (e) => {
          //const d = document.querySelector(".fastCategory ")
        
          if(e.target ){     
              setHeaderFast(true)
          }
      })




 

  return (
    <div className='HeaderSection'>

            <MainCartItem />
   
            <div className={`MainSidebarSection ${ToogleToOpenMenu}`} > 
    <div className='ImageSideBara'>
        <span onClick={OpenMenuCalssAdd}  ><TfiClose /></span>
                      </div>
         <MainSideBar />
    </div>

        <div className='container'>
            <div className='headerFizedSecend'>
            <div className={`MainHeaderPartConatiner ${openheaderFast ? "Height" : "OrHeight"} `}>
                <div className='MainHeaderPartContant'>

                    <div  className={`FastHeaderpart ${openheaderFast ? "transFrom" : "None"} } `  } >
                        <div className='FastHeaderContainer'>
                            <span>Free Shipping over $100 & free Returns</span>
                            <div className='FastHeaderContantConatiner'>
                            <div className='FastHeaderContant'>
                            <span className='HotLine'>HotLine:(+880) 014-0542683 </span>
                            <span>English </span>
                            </div>
                            </div>

                        </div>
                    </div>

                    <div className='MiddleHeaderpart'>
                         <div className='SecendHeaderContainer'>

                            <div className='LogoPart'>
                            <span onClick={OpenMenuCalssAdd} className="iconheader"><LuAlignLeft /></span>
                                <Link to={"/"}>Daily Shop</Link>
                            </div>

                            <div className='searchPart'>
                                <input type='text' placeholder='Enter Your Search Products' />
                                <div></div>
                            </div>

                                <div className='LoginPartHeader'>
                                 <div className='LoginPartConatnt'>

                
                                  
                    
                                  
                                  <div  className="rightSideLoginButtonSecend">
                                    <h4 className="contant">Login</h4>
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
