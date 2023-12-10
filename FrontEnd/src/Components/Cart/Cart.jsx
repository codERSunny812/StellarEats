import React from "react";
import Lottie from "lottie-react";
import emptyCart from './emptyCart.json'
import store from "../../util/store";
import CartCard from "./CartCard";
import {useSelector} from  'react-redux'
import './cartCard.css';

const Cart = () => {

  // get cart items from out store
    // subscribe  to the only the  cart items 
  const CartItems = useSelector((store)=> store.cart.items);
  console.log(CartItems);
  return Object.keys(CartItems).length === 0 ? (<Lottie animationData={emptyCart} style={{height:'300px'}} /> ): (
    <>
    {/* //now map the cart items to show it in a card  */}

    <div className="cartComp">


      <div className="listOfOrder">
          {
            CartItems.map((listItems) => {
              return (
                <CartCard listItems={listItems} key={listItems.id} />
              )
            })
          }
      </div>

       
        <div className="priceSection">
          <h3>bill details</h3>
          <h3>items : xxx</h3>
          <h3>delivary fee : xxx</h3>
          <h3>gst charge : xxx</h3>

          <button>Proceed to pay</button>

        </div>
    </div>
   
    </>
  );
};

export default Cart;
