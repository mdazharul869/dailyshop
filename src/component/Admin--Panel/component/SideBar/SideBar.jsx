

import { motion } from "framer-motion";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCreditCard } from 'react-icons/fa';
import { FiLogOut, FiUsers } from "react-icons/fi";
import { GoProjectTemplate } from "react-icons/go";
import { ImStatsDots } from 'react-icons/im';
import { IoNotifications } from 'react-icons/io5';
import { LuAlignLeft, LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiCarProfile } from 'react-icons/pi';
import { SiLogstash } from "react-icons/si";
import { SlSettings } from 'react-icons/sl';
import { Link } from "react-router-dom";
import "./sidebar.scss";


const SideBar = () => {

    const [open , setopen] = useState(false)

    //const block  = "768px"

    const variants = {

         display: "none" 
      }
      

  

  return (
    <div className="DisplayShowHiddenSideBAr">
   
    <motion.div style={variants} animate={ open ? {width : "58px"} : {width : "200px"} } s  className={`sidebar`}>
      <div className="top">
      <LuAlignLeft onClick={()=>setopen(!open)} className="iconsToogle" />
        <Link to="/" style={{ textDecoration: "none" }}>
       
          <span  className={`${!open ? ""  : "SpanOnclikEffict" } logo`}>Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <LuLayoutDashboard className={`${!open ? ""  : "svgicons" } icons`} />
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}><Link to={"/admin/dasbord"}>Dasbord</Link></span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <FiUsers className={`${!open ? ""  : "svgicons" } icons`} />
              <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Users</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li>
            <FaCreditCard className={`${!open ? ""  : "svgicons" } icons`} />
              <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Products</span>
            </li>
          </Link>
          <li>
          <GoProjectTemplate className={`${!open ? ""  : "svgicons" } icons`} />
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Orders</span>
          </li>
          <li>
          <PiCarProfile className={`${!open ? ""  : "svgicons" } icons`} />
          
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
          <ImStatsDots className={`${!open ? ""  : "svgicons" } icons`} />
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Stats</span>
          </li>
          <li>
          <IoNotifications className={`${!open ? ""  : "svgicons" } icons`} />
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <MdOutlineHealthAndSafety className={`${!open ? ""  : "svgicons" } icons`}/>
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>System Health</span>
          </li>
          <li>
          <SiLogstash className={`${!open ? ""  : "svgicons" } icons`}/>
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Logs</span>
          </li>
          <li>
          <SlSettings className={`${!open ? ""  : "svgicons" } icons`}/>
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
  
          <CgProfile className={`${!open ? ""  : "svgicons" } icons`}/>
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Profile</span>
          </li>
          <li>
          <FiLogOut className={`${!open ? ""  : "svgicons" } icons`}/>
            <span className={`${!open ? ""  : "SpanOnclikEffict" }`}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
     
        ></div>
        <div
          className="colorOption"
         
        ></div>
      </div>
    </motion.div>
    </div>
  );
};

export default SideBar;
