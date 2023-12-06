import React from 'react'
import './cartCard.css';

const CartCard = (props) => {
    console.log(props.Item);
    
  return (
    <>
    <div className="cartCardCont">
        <div className="aboutFood">
            <div className="restaurantInfo">
            <h1>{props.Item.category}</h1>
            </div>

            <div className="foodAdded">
               <h3>{props.Item.name}</h3>
                <h3>₹{props.Item.price/100}</h3>
            </div>

            <div className="totalMoney">
                <h2>subtotal</h2>
                <span>xxx</span>
            </div>

          
        </div>
       
    </div>
    </>
  )
}

export default CartCard