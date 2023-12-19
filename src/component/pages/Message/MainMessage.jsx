/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import "./MainMessage.scss";
import Message from './Message';


function MainMessage ()  {

    const [ open, setOpen] = useState(false) 



  return (
    <>
    <div className="SmallMessagePertContainer">
        <div onClick={()=>setOpen(!open)} className="SmallMessagePertContant">
            <span className=""><HiOutlineChatAlt2 /></span>
        </div>    
    </div>

    {
        open && (
            <motion.div animate={ { } } className="MessagePart">


                <div onClick={()=>setOpen(false)} className='CloseChatbutton'>
                    <span><RxCross1 /></span>
                </div>

            <Message />
        </motion.div>
        )
    }


   </>
  )
}

export default MainMessage