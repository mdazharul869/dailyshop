/* eslint-disable no-unused-vars */
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

export default function FotterMobail () {
  return (
    <div className='FooterMobailMenu'>
      <div className='MobailFooterMenu-Container'>
        <div className='MobailFooterMenu-Conatant'>

            <div className='MobailMenuItem'>
              <span className=""><LuLayoutDashboard className='DasbordMobailMenu-iconbs-svg' /></span>
            </div>
            <div className='MobailMenuItem'>
              <span className=""><IoNotifications className='NotficationMobailMenu-iconbs-svg' /></span>
            </div>
            <div className='MobailMenuItem'>
              <span className=""><CgProfile className='ProfileMobailMenu-iconbs-svg' /></span>
            </div>
            <div className='MobailMenuItem'>
              <span className=""><FiLogOut className='LogoutMobailMenu-iconbs-svg' /></span>
            </div>
                
            
        </div>

      </div>

    </div>
  )
}

