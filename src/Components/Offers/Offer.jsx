import React from 'react'
import offerAnim from './offer.json'
import Lottie from 'lottie-react'

const Offer = () => {
  return (
    <>
    <div className="offerContainer">
        <Lottie animationData={offerAnim} style={{height:'300px' , marginTop:'120px' , width:'100%'}}/>
    </div>
    </>
  )
}

export default Offer;