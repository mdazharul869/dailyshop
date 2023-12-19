/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BsFillEmojiExpressionlessFill } from "react-icons/bs"
import { HiOutlineChatAlt2 } from "react-icons/hi"
import { IoSend } from "react-icons/io5"
import { PiLinkDuotone } from "react-icons/pi"
import "./MainMessage.scss"
const Message = () => {

    const people = [
        {
            img : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
        },
        {
            img : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
        },
        {
            img : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
        },
        {
            img : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
        }
    ] 

    const id = "2"
    const userRole = "admin"
    console.log(userRole)




    const ChatImg = {
        
            image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
        
    }

    const data = {
           
            incoming : [
                {               
            
                    id: "4",
                    userid : "5",
                    name : "Md Azharul",
                    message : "Hi I am Md Azharul How Can I assist You!",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                    
                },
                {
                  
            
                    id: "5",
                    userid : "6",
                    name : "Md Abdulla",
                    message : "Hi I am Md Azharul How Can I assist You!",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                    
                },
                {
                  
            
                    id: "7",
                    userid : "8",
                    name : "Md Azharul",
                    message : "Hi I am Md Azharul How Can I assist You!",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                    
                },
                {
                  
            
                    id: "9",
                    userid : "10",
                    name : "Md abdulla",
                    message : "Hi I am Md Azharul How Can I assist You!",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                    
                },
                {
                  
            
                    id: "11",
                    userid : "12",
                    name : "Md Azharul",
                    message : "Hi I am Md Azharul How Can I assist You!",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                    
                },

            ] ,

            outgoing :[
                {
                    id: "1",
                    userid : "3",
                    name : "Md Asraful",
                    message : "Hi I am md Azharul",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                },
                {
                    id: "2",
                    userid : "2",
                    name : "Md Rahman",
                    message : "Hi I am md Azharul",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                },
                {
                    id: "3",
                    userid : "2",
                    name : "Md Rahman",
                    message : "Hou Are You",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                },
                {
                    id: "3",
                    userid : "2",
                    name : "Md Rahman",
                    message : "Hou Are youbro",
                    image : "https://scontent.fjsr16-1.fna.fbcdn.net/v/t39.30808-6/393257336_292539880365698_6603252124373938707_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHM2xlEZINeogIaU8upc4lWOJqRyB5mtj84mpHIHma2P0GIyBTgaosIq7uyzxAOe9bq-yU1sdY6UWZaqIi9w2S5&_nc_ohc=WnbkeQOwuRsAX9Bpcig&_nc_zt=23&_nc_ht=scontent.fjsr16-1.fna&oh=00_AfCeVFj3wrUSG7fsnlz1jby08NdGDhd5QuMWgG5ySj2waw&oe=654F7888"
                }
            ] 
        
        }
        

    const [openAdminmessage , setAdminMessge] = useState(false)
    


  return (
    <div className='MainMessage'>
    <div className='container'>
        <div className='MainMessageContainer'>
            <div className='MainMessageContent'>


                <div className='MainMessageheader'>
                    <div className='MainMessageheaderContainer'>
                        <div className='MainMessageheaderContant'>

                            <div className='ChatTittle'>
                                <div className='ChatTittleItem'>
                                    <span><HiOutlineChatAlt2 /></span>
                                    <span>Chat</span>
                                </div>
                            </div>
                            <div className='ChatManActivePart'>
                                {
                                    people && people.map((el, index)=>{
                                        return(
                                            <div key={index} className='ChatManActivePartitem'>
                                            <img src={el.img} alt='' />
                                        </div>
                                        )
                                    })
                                }

                            </div>

                            <div className='ChatInfoText'>
                                <div className='ChatInfoTextConatent'>
                                    <span className='Quationspart'>quations? Chat With Us</span>
                                    <span className=''> Support Are Online</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`MainMessageMiddle `}>
                    <div className='MainMessageMiddleContainer'>
                        <div className='MainMessageMiddleContant'>

                            {
                                userRole === "admin" && (
                            

                                    <div className='MainMessageMiddleitems'>
                                    <div className={`MainMessageMiddleitemAdmin ${userRole ==="user" ? " HiddenBottom" : " BolckBottomMessage"}`}>

                                       <div className=''>
                                            <h4 onClick={()=>setAdminMessge(false)}>Chat List</h4>
                                       </div>
    
                            {/* 1st Person container this --------------is */}
    
                                    {
                                      data.outgoing &&  data.outgoing.map((item , index)=>{

                                        console.log(item.userid.sort )
                                            return(
                                                <div key={index} className={`MainMessageMiddleitemConatent ${openAdminmessage ? "HiddenBottom" : "BolckBottomMessage"}`}>
                                                  <div className='MainMessageMiddleitemConatentFlex'>
                                                    <div onClick={() =>setAdminMessge(!openAdminmessage)} className='AdminMiddleContant'>
    
                                                <div className='ImageMiddleChatContainer'>
                                                    <img src={item.image} alt='' />
                                                </div>
            
                                                <div className='textMiddleChatContainer'>
                                                  
                                                        <span className='textMiddleChatNameAdmin'>{item.name}</span>
                                                        <span className='textMiddleChatAdmin'>{item.message}</span>
                                                   
                                                </div>

                                                </div>
                                                </div>
                                                </div>
                                            )
                                        })
                                    }
    
    
                            {/* 1st Person container -----end------ this is */}
    
                        
                                {/* Click to open This page Admin */}

                                 {
                                    openAdminmessage && (
                                        <>
                                                                {/* 1st Person container this --------------is */}

                                {
                                  data.incoming &&  data.incoming.map((item , index)=>{
                                        return(
                                            <div key={index} className='MainMessageMiddleitemConatent'>
                                        <div className='MainMessageMiddleitemConatentFlex'>

                                            <div className='ImageMiddleChatContainer'>
                                                <img src={item.image} alt='' />
                                            </div>
        
                                            <div className='textMiddleChatContainer'>
                                              
                                                    <span className='textMiddleChatName'>{item.name}</span>
                                                    <span className='textMiddleChat'>{item.message}</span>
                                               
                                            </div>
                                            </div>
        
                                            </div>
                                        )
                                    })
                                }


                        {/* 1st Person container -----end------ this is */}

                       {/* 2nd Person container this --------------is */}
                                    {
                                        data.outgoing && data.outgoing.map((item , index) =>{
                                            return(

                                                id === item.userid ? (

                                                <div key={index} className='MainMessageMiddleitemConatentSecend'>

                                                <div className='MainMessageMiddleitemConatentFlex'>

                                                <div className='textMiddleChatContainer textMiddleChatContainerSecend'>
                                                  
                                                        <span className='textMiddleChatNameSecend'>{ item.name}</span>
                                                        <span className='textMiddleChatSecend'>{item.message}</span>
                                                   
                                                </div>
            
                                                <div className='ImageMiddleChatContainer'>
                                                    <img src={ChatImg.image} alt='' />
                                                </div>
                                                
                                                </div>
            
                                                </div>
                                                ) : (<div key={index} className=''></div>)
                                            )
                                        })
                                    }
                        {/* 2nd Person container -----end------ this is */}


                                        </>
                                    )
                                 }
    
    
                                    </div>
    
                                </div>


                                    // Click open Admin Message to this page working

                                    
                                    
                                )
                            }


                            <div className='MainMessageMiddleitems'>
                                <div className= {`MainMessageMiddleitem ${userRole === "admin" ? "HiddenBottom" : "BolckBottomMessage"} `}>

                        {/* 1st Person container this --------------is */}

                                {
                                  data.incoming &&  data.incoming.map((item , index)=>{
                                        return(
                                            <div key={index} className='MainMessageMiddleitemConatent'>
                                            <div className='MainMessageMiddleitemConatentFlex'>

                                            <div className='ImageMiddleChatContainer'>
                                                <img src={item.image} alt='' />
                                            </div>
        
                                            <div className='textMiddleChatContainer'>
                                              
                                                    <span className='textMiddleChatName'>{item.name}</span>
                                                    <span className='textMiddleChat'>{item.message}</span>
                                               
                                            </div>
                                            </div>
        
                                            </div>
                                        )
                                    })
                                }


                        {/* 1st Person container -----end------ this is */}

                       {/* 2nd Person container this --------------is */}
                                    {
                                        data.outgoing && data.outgoing.map((item , index) =>{
                                            return(

                                                id === item.userid ? (

                                                <div key={index} className='MainMessageMiddleitemConatentSecend'>

                        

                                                <div className='textMiddleChatContainer textMiddleChatContainerSecend'>
                                                  
                                                        <span className='textMiddleChatNameSecend'>{ item.name}</span>
                                                        <span className='textMiddleChatSecend'>{item.message}</span>
                                                   
                                                </div>
            
                                                <div className='ImageMiddleChatContainer'>
                                                    <img src={ChatImg.image} alt='' />
                                                </div>
            
                                                </div>
                                                ) : (<div key={index} className=''></div>)
                                            )
                                        })
                                    }
                        {/* 2nd Person container -----end------ this is */}



                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className={`MainMessageBottom ${openAdminmessage ? "BolckBottomMessage" : "HiddenBottom"} ${userRole === "admin" ? "HiddenBottom" : "BolckBottomMessage"}`}>
                    <div className='MainMessageBottomContainer'>
                        <div className='MainMessageBottomContant'>
                            <div className='Inputitems'>
                                <div className='Inputitem'>
                                <input type='text'  placeholder='Write Message' />
                                <div className='InputitemInRight'>
                                <span><BsFillEmojiExpressionlessFill /></span>
                                <span><PiLinkDuotone /></span>
                                <span ><IoSend /></span>
                                
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

export default Message
