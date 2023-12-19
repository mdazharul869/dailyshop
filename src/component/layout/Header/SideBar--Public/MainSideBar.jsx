/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./MainSideBar.scss"

export default function MainSideBar ()  {

  const [opentittle , setOpen] = useState(false)
  const [opentittle1 , setOpen1] = useState(false)
  const [opentittle2 , setOpen2] = useState(false)
  const [opentittle3 , setOpen3] = useState(false)
  const [opentittle4 , setOpen4] = useState(false)
  const [opentittle5 , setOpen5] = useState(false)
  const [opentittle6 , setOpen6] = useState(false)
  const [opentittle7 , setOpen7] = useState(false)
  const [opentittle8 , setOpen8] = useState(false)
  const [opentittle9 , setOpen9] = useState(false)

  const toggle = () =>{
     setOpen(!opentittle)
     setOpen1(false)
     setOpen2(false)
  setOpen3(false)
  setOpen4(false)
  setOpen5(false)
  setOpen6(false)
  setOpen7(false)
  setOpen8(false)
  setOpen9(false)


  }

  const toggle1 = () =>{
    setOpen1(!opentittle1)
    setOpen(false)
    setOpen2(false)
 setOpen3(false)
 setOpen4(false)
 setOpen5(false)
 setOpen6(false)
 setOpen7(false)
 setOpen8(false)
 setOpen9(false)
 }
 const toggle2 = () =>{
  setOpen2(!opentittle2)
  setOpen1(false)
  setOpen(false)
setOpen3(false)
setOpen4(false)
setOpen5(false)
setOpen6(false)
setOpen7(false)
setOpen8(false)
setOpen9(false)
}
const toggle3 = () =>{
  setOpen3(!opentittle3)
  setOpen1(false)
  setOpen(false)
setOpen2(false)
setOpen4(false)
setOpen5(false)
setOpen6(false)
setOpen7(false)
setOpen8(false)
setOpen9(false)
}

  const toggle4 = () =>{
     setOpen4(!opentittle4)
     setOpen1(false)
     setOpen2(false)
   setOpen3(false)
   setOpen5(false)
   setOpen6(false)
   setOpen7(false)
   setOpen8(false)
   setOpen9(false)
  }
  const toggle5 = () =>{
    setOpen5(!opentittle5)
    setOpen4(false)
    setOpen1(false)
    setOpen2(false)
  setOpen3(false)
  setOpen6(false)
  setOpen7(false)
  setOpen8(false)
  setOpen9(false)
 }
 const toggle6 = () =>{
  setOpen6(!opentittle6)
  setOpen4(false)
  setOpen1(false)
  setOpen2(false)
  setOpen5(false)
setOpen3(false)
setOpen7(false)
setOpen8(false)
setOpen9(false)
}
const toggle7 = () =>{
  setOpen7(!opentittle7)
  setOpen4(false)
  setOpen1(false)
  setOpen2(false)
setOpen3(false)
setOpen6(false)
setOpen5(false)
setOpen8(false)
setOpen9(false)
}
const toggle8 = () =>{
  setOpen8(!opentittle8)
  setOpen4(false)
  setOpen1(false)
  setOpen2(false)
setOpen3(false)
setOpen6(false)
setOpen5(false)
setOpen7(false)
setOpen9(false)
}
const toggle9 = () =>{
  setOpen9(!opentittle9)
  setOpen8(false)
  setOpen4(false)
  setOpen1(false)
  setOpen2(false)
setOpen3(false)
setOpen6(false)
setOpen5(false)
setOpen7(false)

  
}

const [openTab , setOpenTab] = useState(false)

function OpenMenuCalssAdd() {
  setOpenTab(openTab => !openTab)
}

const ToogleToOpenMenu = openTab ? "CloseNav" : "ActiveNav"

const [openheaderFast, setHeaderFast] = useState(false)

  // slider button slide latest product Slider end
  window.addEventListener("scroll", (e) => {
      //const d = document.querySelector(".fastCategory ")
    
      if(e.target ){     
          setHeaderFast(true)
      }
  })


  
  return (

        <div className={`MainSidebarConatiner ${ToogleToOpenMenu} `}>
            <div className='MainSidebarConatant'>

                  <div className='MainSidebarItemUpImage'>

                      <div className='ImageSideBar'>
                          <img src='https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg' />
                      </div>
                      
                      <div className='ImageSideBar'>
                          <img src='https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg' />
                      </div>
                      
                      <div className='ImageSideBar'>
                          <img src='https://static-01.daraz.com.bd/p/36d6b6b57dffa3b2f6e2c832fb9a440e.jpg' />
                      </div>



                  </div>

                  <div className='MainSidebarItem'>
                      <div className='TittleShopBy'>
                        <span>Shop by</span>
                      </div>


                  <div className=''>
                      <div onClick={toggle} className='CategoryTittle'>
                        <span >Woman Fashon</span>
                      </div>

                      {
                      opentittle && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>

                              
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle1} className='CategoryTittle'>
                        <span >Men Fashon</span>
                      </div>

                      {
                      opentittle1 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle2} className='CategoryTittle'>
                        <span >Woman Fashon</span>
                      </div>

                      {
                      opentittle2 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle3} className='CategoryTittle'>
                        <span >Men Fashon</span>
                      </div>

                      {
                      opentittle3 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle4} className='CategoryTittle'>
                        <span >Woman Fashon</span>
                      </div>

                      {
                      opentittle4 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle5} className='CategoryTittle'>
                        <span >Men Fashon</span>
                      </div>

                      {
                      opentittle5 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle6} className='CategoryTittle'>
                        <span >Woman Fashon</span>
                      </div>

                      {
                      opentittle6 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle7} className='CategoryTittle'>
                        <span >Men Fashon</span>
                      </div>

                      {
                      opentittle7 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>


                  <div className=''>
                      <div onClick={toggle8} className='CategoryTittle'>
                        <span >Woman Fashon</span>
                      </div>

                      {
                      opentittle8 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>

                  <div className=''>
                      <div onClick={toggle9} className='CategoryTittle'>
                        <span >Men Fashon</span>
                      </div>

                      {
                      opentittle9 && (
                        <div className='CategoryUnderitems'>

                        <div className='CategoryUnderTittle'>
                              <Link>Phone</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Compo Mastar</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                            <div className='CategoryUnderTittle'>
                              <Link>Table</Link>
                            </div>
  
                      </div>                       
                      )
                    }
                    


                  </div>






            


                  </div>

                  

            </div>
        </div>
    
  )
}


