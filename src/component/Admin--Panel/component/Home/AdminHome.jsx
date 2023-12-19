/* eslint-disable no-unused-vars */
import React from 'react'
import Chart from '../chart/Chart'
import Featured from '../featured/Featured'
import "./AdminHome.scss"
import Widget from './Widget'

export const AdminHome = () => {
  return (
    <div>
      <div className='home'>
        <div className='homeContainer'>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>

          <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        </div>
        </div>
    </div>
  )
}


