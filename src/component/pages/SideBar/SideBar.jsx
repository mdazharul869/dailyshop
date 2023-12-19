import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const data = [
    {
        path : "/cooke",
        name : "Offer",
        icons : ""

    },

    {
        path : "/cooke",
        name : "Egg Club",
        icons : ""

    },

    {
        path : "/cooke",
        name : "Daily Deals",
        img : "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-372/Default/components/header/CategoryMenuVertical/images/DailyDeal.gif?q=best&webp=1"

    },

]

export const SideBar = (children) => {
  return (
    <>
    <div className="">
<motion.div animate={{width: "200px" }} className="sideBar">
    <section className="">
        {
            data && data.map((el, index)=>{
                return (
                    <div key={index} className="sideBarContant">
                         <NavLink className="sideBarTittle" > <img src={el.img} alt="" className="imageSideBarSmall " /></NavLink>
                         <NavLink className="sideBarTittle" >{el.name}</NavLink>
                    </div>
             
                )
            })
        }
    </section>
</motion.div>
<main>{children}</main>
</div> 
    </>
   
  )
}

