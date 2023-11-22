import React from "react";
import helpAnim from './helpanim.json'
import Lottie from "lottie-react";

const Help = () => {
  return(
    <>
    <Lottie animationData={helpAnim} style={{height:'200px' , marginTop:'120px'}}/>
    </>
  );
};

export default Help;
