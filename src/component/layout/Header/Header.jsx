import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { LuAlignLeft } from "react-icons/lu";
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import "./Header.scss";
import MainSideBar from "./SideBar--Public/MainSideBar";

function Header() {
    const [open , setopen] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [Regestationopen , setRegestationsetopen] = useState(false)

    const login = () =>{
        setopen(!open)
        setRegestationsetopen(false)
      
    }
    const regestation = () =>{
        setRegestationsetopen(true)
        setopen(false)
    }
  
    const [openTab , setOpenTab] = useState(false)

    function OpenMenuCalssAdd() {
      setOpenTab(openTab => !openTab)
    }
  
    const ToogleToOpenMenu = openTab ? "ActiveNav" : "CloseNav"
  


  return (
    <header className= {`haderPart ${open ? " bodyColor" : ""}`}>

    <div className={`MainSidebarSection ${ToogleToOpenMenu}`} > 
    <div className='ImageSideBara'>
        <span onClick={OpenMenuCalssAdd}  ><TfiClose /></span>
                      </div>
         <MainSideBar />
    </div>

     
        <div className= {`container ${open ? " bodyColor" : ""} `}>
            <div className="headerFized">
            <div className="header">
                <div className="headerContant">
                    
                    <div className="logoPartWithicons">
                        <div className="iconsPartHeader">
                            <span onClick={OpenMenuCalssAdd} className="iconheader"><LuAlignLeft /></span>
                        </div>

                        <Link to={"/"} className="logotittle">Daily Shop</Link>
                    </div>

                    <div className="searchItem">
                        <input type="text" placeholder="Search.." className="searceMiddle"/>
                    </div>

                    <div onClick={login} className="rightSide">
                        <h4 className="contant">Login</h4>
                    </div>

                </div>
            </div>
        </div>
        </div>

                        {
                            open && (
                                <div className='DispalyDixesOption'>
                                <div className='conatinerA'>
                    
                    
                                                     <div className="js-warp-hide bg-gray-dark-mktg d-flex flex-auto flex-column overflow-hidden position-relative">
                    
                                                     <div className='imageConatiner'>
                                                        <img src='https://github.githubassets.com/assets/hero-glow-f6eed469bca2.svg' />
                                                      </div>
                    
                                                      
                                                      <div className="signup-space">
                                                                        <div className="signup-stars">asdfasd</div>
                                                                        <div className="signup-stars">sadfsa</div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                           </div>
                                                         </div>
                    
                    
                                                         <div className='InputTipe-Open-TheWindow'>
                                                           <button onClick={regestation}>Regestation</button>
                                                         </div>
                                                         <div className='InputTipe-Close-TheWindow'>
                                                           <span onClick={()=>setopen(false)}><TfiClose /></span>
                                                         </div>
                    
                                                         <div className='InputTabOpenContainer'>
                                                            <div className='InputTabContainer'>

                                                            <div className='inputTabContant'>
                                                                  <div className=' inputLevalTittleloginAttention'>
                                                                      <h5 className="AttentionColor">Attention: Remember That Daily Shop is best platfrom from you To Your Buy Products.</h5>
                                                                   </div>
                
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Email <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input  type='text' placeholder='White Your Login Email' />
                                                                   </div>
                           
                                                              </div>
                    
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Password <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Password' />
                                                                   </div>
                           
                                                              </div>
                    
  
                    
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleIte buttonInput'>
                                                                    <button onClick={()=>setopen(false)}>Login</button>
                                                                   </div>
                           
                                                              </div>
                                                            </div>
                                                         </div>

                                                         <div className='InputTabOpenContainerRight'>
                                                            <div className='InputTabContainer'>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Login Also More</h5>
                                                                   </div>
                    
                           
                                                              </div>
 
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleItebuttonInput '>
                                                                    <button onClick={()=>setopen(false)} className="FacebookLogin"><span><BsFacebook /></span> FaceBook</button>
                                                                   </div>
                           
                                                              </div>
                                                              <div className='inputLevalTittleOr'>
                                                                      <h5>or</h5>
                                                              </div>

                                                               
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleItebuttonInput '>
                                                                    <button onClick={()=>setopen(false)}  className="GooleLogin"><span><FcGoogle /></span> Google</button>
                                                                   </div>
                           
                                                              </div>
                                                            </div>
                                                         </div>
                                </div>
                            </div>
                                )
                         }

                    {/* regestation user Show page */}

                    {
                            Regestationopen && (
                                <div className='DispalyDixesOption'>
                                <div className='conatinerA'>
                    
                    
                                                     <div className="js-warp-hide bg-gray-dark-mktg d-flex flex-auto flex-column overflow-hidden position-relative">
                    
                                                     <div className='imageConatiner'>
                                                        <img src='https://github.githubassets.com/assets/hero-glow-f6eed469bca2.svg' />
                                                      </div>
                    
                                                      
                                                      <div className="signup-space">
                                                                        <div className="signup-stars">asdfasd</div>
                                                                        <div className="signup-stars">sadfsa</div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                           </div>
                                                         </div>
                    
                    
                                                         <div className='InputTipe-Open-TheWindow'>
                                                           <button >Regestation</button>
                                                         </div>
                                                         <div className='InputTipe-Close-TheWindow'>
                                                           <span onClick={()=>setRegestationsetopen(false)}><TfiClose /></span>
                                                         </div>
                    
                                                         <div className='InputTabOpenContainer'>
                                                            <div className='InputTabContainer'>
                                                            <div className='inputTabContant'>
                                                                  <div className=' inputLevalTittleloginAttention'>
                                                                      <h5 className="AttentionColor">Attention: Remember That Daily Shop is best platfrom from you To Your Buy Products.</h5>
                                                                   </div>
                
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>First Name <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Last Name <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Email <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Phone <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Name <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Name <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleIte buttonInput'>
                                                                    <button>Submit</button>
                                                                   </div>
                           
                                                              </div>
                                                            </div>
                                                         </div>

                                                         <div className='InputTabOpenContainerRight'>
                                                            <div className='InputTabContainer'>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Regestation Also More</h5>
                                                                   </div>
                    
                           
                                                              </div>
 
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleItebuttonInput '>
                                                                    <button className="FacebookLogin"><span><BsFacebook /></span> FaceBook</button>
                                                                   </div>
                           
                                                              </div>
                                                              <div className='inputLevalTittleOr'>
                                                                      <h5>or</h5>
                                                              </div>

                                                               
                                                              <div className='inputTabContant'>
                    
                                                                   <div className='inputLevalTittleItebuttonInput '>
                                                                    <button className="GooleLogin"><span><FcGoogle /></span> Google</button>
                                                                   </div>
                           
                                                              </div>
                                                            </div>
                                                         </div>
                                </div>
                            </div>
                                )
                         }

                    {/* regestation user Show page */}

  
    </header>
  );
}

export default Header;