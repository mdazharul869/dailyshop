/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from 'react-icons/fc'
import { TfiClose } from "react-icons/tfi"
import AllUserList from './ALLuserList'

const Users = () => {

    const [Regestationopen , setRegestationsetopen] = useState(false)
  return (
    <div className='AllUserSection'>
        <div className='AllUserContainer'>
            <div className='AddNewTittle'>
                <div className='userCountAll'>
                <p >Our All Users</p>
                <p style={{color: "red"}} >12502 Found now</p>
                </div>


                <span onClick={()=>setRegestationsetopen(!Regestationopen)}>Add New User</span>
            </div>

            <div className='UserTableConatiner'>
                <AllUserList />
            </div>
        </div>

        
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

      
    </div>

    
  )
}

export default Users
