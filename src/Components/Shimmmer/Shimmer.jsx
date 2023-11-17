import React from 'react'
import './Shimmer.css'
import shimmer from './shimmer.json'
import Lottie from 'lottie-react'
const Shimmer = () => {
  return (
   <div className="bodyCard">{
  Array(25).fill("").map(()=>(
    <div className="shimmerCard">
       <div className="img"></div>
       <div className="name"></div>
      <div className="avgrating"></div>
       <div className="delivarytime"></div>
       <div className="cuisines"></div>
       <div className="areaName"></div>
      {/* <Lottie animationData={shimmer} className='shimmeranim' /> */}

     </div>
    
  ))
      }   </div>
  )
}

export default Shimmer