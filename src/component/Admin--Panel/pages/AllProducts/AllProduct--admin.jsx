/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from 'react-icons/fc'
import { TfiClose } from "react-icons/tfi"
import AllProductList from './AllproductsList'

const AllProductAdmin = () => {

    const [Regestationopen , setRegestationsetopen] = useState(false)

    const [productName , setProductName] = useState()
    const [productRegularPrice , setProductRegularPrice] = useState()
    const [productCurrentPrice , setProductCurrentPrice] = useState()
    const [productCategory , setProductCategory] = useState()
    const [productSubCategory , setProductSubCategory] = useState()
    const [productLocation , setProductLocation] = useState()
    const [productSize , setProducSize] = useState()
    const [mall , setmall] = useState()
    const [Stock , setStoke] = useState()


  const createProductSubmitHandler = (e) =>{
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("productname", productName);
    myForm.set("regularprice", productRegularPrice);
    myForm.set("currentprice", productCurrentPrice);
    myForm.set("category", productCategory);
    myForm.set("stock", Stock);
    myForm.set("subcategory", productSubCategory);
    myForm.set("location", productLocation);
    myForm.set("size", productSize)
    myForm.set("mall", mall)

  

    console.log(myForm)
  }
  
  return (
    <div className='AllUserSection'>
        <div className='AllUserContainer'>
            <div className='AddNewTittle'>
                <div className='userCountAll'>
                <p >Our All Products</p>
                <p style={{color: "red"}} >12502 Found now</p>
                </div>


                <span onClick={()=>setRegestationsetopen(!Regestationopen)}>Add New Product</span>
            </div>

            <div className='UserTableConatiner'>
                <AllProductList />
            </div>
        </div>

        
                    {/* regestation user Show page */}

                    {
                            Regestationopen && (
                                <div className='DispalyDixesOption'>
                                  <form onSubmit={createProductSubmitHandler}>
                                <div className='conatinerA'>
                    
                    
                                                     <div className="js-warp-hide bg-gray-dark-mktg d-flex flex-auto flex-column overflow-hidden position-relative">
                    
                                                     <div className='imageConatiner'>
                                                        <img src='https://github.githubassets.com/assets/hero-glow-f6eed469bca2.svg' />
                                                      </div>
                    
{/*                                                       
                                                      <div className="signup-space">
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                                        <div className="signup-stars"></div>
                                                           </div> */}


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
                                                                      <h5>Product Name <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' name='ProductName' value={productName} required onChange={(e)=>setProductName(e.target.value)} placeholder='White Your Prodcut Name' />
                                                                   </div>
                           
                                                              </div>
                    
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Regular Price <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='number'  onChange={(e)=>setProductRegularPrice(e.target.value)} required placeholder='White Regular Price' />
                                                                   </div>
                           
                                                              </div>

                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Current Price <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='number' required onChange={(e)=>setProductCurrentPrice(e.target.value)} placeholder='White Current Price' />
                                                                   </div>
                           
                                                              </div>

                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Stoke  <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='number' required onChange={(e)=>setStoke(e.target.value)} placeholder='White Stoke' />
                                                                   </div>
                           
                                                              </div>

                                                              

                                                              
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Category <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select onChange={(e)=>setProductCategory(e.target.value)}  >
                                                                  <option>Choose Category</option>
                                                                  <option value="Category"> Category</option>
                                                                  <option value=""> Category</option>
                                                                  <option value="">Choose Category</option>
                                                                  <option value=""> Category</option>
         
                                                                
                                                                </select>
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Sub Category <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select  onChange={(e)=>setProductSubCategory(e.target.value)} >
                                                                  <option value="">Choose SubCategory</option>
                                                                  <option value=""> Category</option>
                                                                  <option value=""> Category</option>
                                                                  <option value="">Choose Category</option>
                                                                  <option value=""> Category</option>
         
                                                                
                                                                </select>
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Promotion & Services <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                    <input type='text' placeholder='White Your Name' />
                                                                   </div>
                           
                                                              </div>
                    
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5> Color <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select   >
                                                                  <option value="">Choose Color</option>
                                                                  <option value=""> Red</option>
                                                                  <option value=""> Yellow</option>
                                                                  <option value="">Blue</option>
                                                                  <option value="">White</option>
                                                                  <option value="">parple</option>
         
                                                                
                                                                </select>
                                                                   </div>
                           
                                                              </div>

                                                                                  
                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5> Size <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select onChange={(e)=>setProducSize(e.target.value)}   >
                                                                  <option value="">Choose Size</option>
                                                                  <option value=""> Xl</option>
                                                                  <option value=""> M</option>
                                                                  <option value="">lXl</option>
                                                                  <option value=""> MY</option>
         
                                                                
                                                                </select>
                                                                   </div>
                           
                                                              </div>

                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5> Location <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select  onChange={(e)=>setProductLocation(e.target.value)} >
                                                                  <option value="">Choose Location</option>
                                                                  <option value=""> bangladesh</option>
                                                                  <option value=""> Cina</option>
                                                                  <option value="">Thailand</option>
                                                                  <option value=""> Japan</option>
         
                                                                
                                                                </select>
                                                                   </div>
                           
                                                              </div>

                                                              <div className='inputTabContant'>
                                                                  <div className='inputLevalTittle'>
                                                                      <h5>Mall & Mart <span className='startInput'>*</span></h5>
                                                                   </div>
                    
                                                                   <div className='inputLevalTittleItem'>
                                                                   <select onChange={(e)=>setmall(e.target.value)}  >
                                                                    <option value="">Choose Mall & Mart</option>
                                                                    <option value=""> Mall & Mart</option>

          
                                                                  
                                                                </select>
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
                                </form>
                            </div>
                                )
                         }

                    {/* regestation user Show page */}

      
    </div>

    
  )
}

export default AllProductAdmin
