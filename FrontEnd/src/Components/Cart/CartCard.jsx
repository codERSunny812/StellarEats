import React from 'react'
import './cartCard.css';

const CartCard = ({listItems}) => {
    // const {Item}= props;
    console.log(listItems);

    // check that its an object 
    if(typeof listItems != 'object' || listItems === null){
        console.log("the object is not a valid object");
        return null;
    }    
  return (
    <>
    <div className="cartCardCont">
        <div className="aboutFood">
            <div className="restaurantInfo">
            <h1>{listItems.category}</h1>
            </div>

            <div className="foodAdded">
                <h3>{listItems.name}</h3>
                 <h3>₹{listItems.price/100}</h3>
            </div>

            <div className="totalMoney">
                <h2>subtotal</h2>
                <span>xxxx</span>
            </div>

          
        </div>
       
    </div>
    </>
  )
}

export default CartCard