/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSortableData } from "./Hookes";


function AllProducts  (props)  {

    const [open , setopen] = useState(false)
    const [id , setId] = useState()



    
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : null;
  };

  const deleteProductHandler = () =>{
    
  }

  return (
    <div className={`OrderListSection ${open ? " " : ""}`} >
        <div className={`container ${open ? " " : ""}`}>
            <div className='OrderListContainer'>
                <div className={`orderListContant   `}>
                    <div className=''>
                        <div className='orderListContantItems'>
                        <table className={"datatable"}>
                            <thead className={"datatablethead"}>
                            <tr>
                                <th className={"thformname"}>
                                <button
                                    type="button"
                                    onClick={() => requestSort("formname")}
                                    className={`${"theadbtn"} ${getClassNamesFor("id")}`}
                                >
                                    #s/n
                                </button>
                                </th>
                                <th className={"thcategory"}>
                                <button
                                    type="button"
                                    onClick={() => requestSort("name")}
                                    className={`${"theadbtn"} ${getClassNamesFor("name")}`}
                                >
                                Product Name
                                </button>
                                </th>

                                <th className={"thcategory"}>
                                <button
                                    type="button"
                                    onClick={() => requestSort("name")}
                                    className={`${"theadbtn"} ${getClassNamesFor("name")}`}
                                >
                                 Category
                                </button>
                                </th>

                                <th className={"thcategory"}>
                                <button
                                    type="button"
                                    onClick={() => requestSort("name")}
                                    className={`${"theadbtn"} ${getClassNamesFor("name")}`}
                                >
                                Product Id
                                </button>
                                </th>

                                <th className={'thformname'}>
                                <button
                                    type="button"
                                    className={`${'theadbtn'} ${getClassNamesFor("action")}`}
                                >
                                    Action
                                </button>
                                </th>

                            </tr>
                            </thead>
                            <tbody>
                            {items.length === 0 ? (
                                <tr className={'tablerow'}>
                                <td colSpan="2" className={'tabledata'}>
                                    No matching records found
                                </td>
                                </tr>
                            ) : (
                                items.slice().map((item, index) => (
                                <tr key={item.id} className={'tablerow'}>
                                    <td className={'tabledata'}>{index === 0 ? index = 1 : index +1}</td>
                                    <td className={'tabledata'}><Link to={`/ditals-products/${item.name}/${item.id}`}>{item.name.length > 16 ? item.name.slice(0,16)+"..": item.name} </Link> </td>

                                    <td className={'tabledata'}><Link>{item.category.length > 16? item.category.slice(0,16)+"..": item.category} </Link> </td>

                                    <td className={'tabledata'}><Link>{item.id.length > 16 ? item.id.slice(0,16)+"..": item.id} </Link> </td>


                                    <td className={'tabledatauserAction'}> 
                                    <div className=" justify-center  ">

                                        <span  onClick={()=>setopen(!open) } to={`/edit-product-admin/${item.id}`} className="  editBtnOpen"><p onClick={()=>setId(item.id)}>Edit</p> 
                                        

                                        
                                        </span>



                                        <button onClick={()=> deleteProductHandler(item.id)} className=" text-red-800">Delete</button>
                                    
                                    </div>
                                    </td>
                                </tr>
                                ))
                            )}


                            </tbody>
                            
                        </table>
                        </div>

                        {
                            open && (
                                        <motion.div  animate={ {height: open ? "88vh" : "0px", width : open ? "" : "0" }  } 
                                        className=' ToggoleTabOpenContainerEditPage'>

                                                    <div 
                                                    className='ToggoleTabOpenContant'>
                                                    <div className=" ToggoleTabOpenContantTittleAllOrder">
                                                        <h4>Edit Page Daily Shop</h4>
                                                        <span onClick={()=>setopen(false)}><RxCross1 /></span>
                                                    </div>
                                
                                                <div className="ToggoleTabOpenContantItemAll">
                                                    <div className="ToggoleTabOpenContantItemEditPage">
                                                        <span className="ToggoleTabOpenContantItemTittle"><MdModeEditOutline /></span>
                                                        <span className="ToggoleTabOpenContantItemTittle">Edit :<Link> P47 - Wireless Bluetooth Headphone - Neckband - Neckband </Link></span>
                                
                                                    </div>

                                                </div>

                                                {/* Baground Image TO Liuke page is best */}

                                                <div className="backgroundImage">
                                                    <img src="https://static-01.daraz.com.bd/p/2a004fec98afbce8651a5afe038e81af.jpg" />
                                                </div>

                                                
                                                {/* <div className="backgroundImage2">
                                                </div>

                                                
                                                <div className="backgroundImage3">
                                                </div>

                                                
                                                <div className="backgroundImage4">
                                                </div> */}

                                                
                                                <div className="backgroundImage">
                                                </div>
                                                {/* Baground Image TO Liuke page is best */}
                                
                                
                                                <div className="ToggoleTabOpenContantItemeditePageAll">
                                                    <div className="ToggoleTabOpenContantItemEditPage">
                                                      
                                                        <div className="EditPageCotainer">
                                                            <div className="FastContainer">
                                                                <div className="FastContainerContant">
                                                                    <div className="FastContainerContantTittle">
                                                                    <span className="">Name</span>
                                                                    <span className="StarfastEditPage">*</span>
                                                                    </div>
                                                                    
                                                                    <input type="text" placeholder="Enter Name" />
                                                                </div>
                                                                <div className="FastContainerContant">
                                                                    <div className="FastContainerContantTittle">
                                                                    <span className="">Category</span>
                                                                    <span className="StarfastEditPage">*</span>
                                                                    </div>
                                                                    
                                                                    <input type="text" placeholder="Enter Name" />
                                                                </div>

                                                                <div className="FastContainerContant">
                                                                    <div className="FastContainerContantTittle">
                                                                    <span className="">Category</span>
                                                                    <span className="StarfastEditPage">*</span>
                                                                    </div>
                                                                    
                                                                    <input type="text" placeholder="Enter Name" />
                                                                </div>
                                                                <div className="FastContainerContant">
                                                                    <div className="FastContainerContantTittle">
                                                                    <span className="">Price</span>
                                                                    <span className="StarfastEditPage">*</span>
                                                                    </div>
                                                                    
                                                                    <input type="text" placeholder="Enter Name" />
                                                                </div>
                                                                <div className="FastContainerContant">
                                                                    
                                                                    <input className="EditBtnEditPage" type="submit" value={"Edit Save"} />
                                                                </div>

                                                                
                                                            </div>

                                                            <div className="SecendContainer">
                                                                <div className="SecendContainer">
                                                                    <div className="ImageConainer">
                                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-374/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                </div>
                                            
                                        
                                        
                                        </motion.div>
                                )
                         }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts