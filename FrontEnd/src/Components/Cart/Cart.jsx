import React from "react";
import Lottie from "lottie-react";
import emptyCart from './emptyCart.json'
import store from "../../util/store";
import {useSelector} from  'react-redux'
import './cartCard.css';
import { imageId } from "../../constant";




const CartItems = ({items})=>{
  // console.log(items);
  return(
     <>
     <div className="cartContainer">
    <div className="itemImage">
          <img src={imageId + items.imageId} alt="items image"/>
          <h2>{items.name}</h2>

    </div>
    <div className="item_price">
    <h2>₹ {items.price / 100}</h2>
    </div>

     </div>
     </>
  )
}

const Cart = () => {
    


  const MyCartItems = useSelector((store)=> store.cart.items);
  const price = MyCartItems.reduce((a,b)=>a+b.price,0);

  const amount = price;
  const currency = "INR";
  const receiptId = "qwsaf3";


  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:9911/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    var options = {
      key: "rzp_test_AyOLQgp6ivsmMT", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "FUSION", //your business name
      description: "Test Transaction",
      image: "https://www.canva.com/design/DAF2lBApmD0/kwFPNXBkKAeVR4PClbaDBQ/view?utm_content=DAF2lBApmD0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "sunny", //your customer's name
        "email": "sengersunny448@gmail.com",
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();

  };


  return Object.keys(MyCartItems).length === 0  ? (<Lottie animationData={emptyCart} style={{height:'300px'}} /> ): (
    <>
    <div className="cartComp">
      <h1>my orders</h1>
      {
          MyCartItems?.map((items)=>{
            console.log(items.name);
          return(
           <CartItems items={items} key={items.id}/>
          );
        })
      }

      <div className="totalPrice">
        <h1>total </h1>
        <h1>₹ {price/100}</h1>
      </div>

      <div className="btnBtn">
          <button className="checkoutBtn" onClick={paymentHandler}>Checkout</button>
         
      </div>
    </div>
   
    </>
  );
};

export default Cart;
