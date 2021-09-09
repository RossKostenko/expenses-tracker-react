import React from "react";
import { useState } from "react/cjs/react.development";
import "./ChartBar.css"

const ChartBar = props => {

   let barFIllHeight = '0%';

   if (props.maxValue > 0) {
      barFIllHeight = Math.round((props.value / props.maxValue) * 100) + '%'
   }
   useState()
   return <div className="chart-bar">
      <div className="chart-bar__inner">
         <div 
            className="chart-bar__fill" 
            style={{height: barFIllHeight}}
         ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
   </div>
}

export default ChartBar;