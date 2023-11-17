import React from 'react'
import './discountInfo.css'
import { BiSolidOffer } from 'react-icons/bi'

const Discount = (props) => {
    // console.log(props);
    const {discountInfo} = props;
    // console.log(discountInfo);

    return(
        <>
            {discountInfo.map((item) => (
                <div className="discountBox" key={item.id}>
                    <BiSolidOffer className='offerIcon'/>
                    <h5>{item?.meta}</h5>
                </div>
            ))}
        </>     
    );
  }

export default Discount;