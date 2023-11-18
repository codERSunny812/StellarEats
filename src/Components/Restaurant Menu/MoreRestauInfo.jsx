import React, { useEffect, useState } from 'react'
import './moreRestauInfo.css'
import { useParams } from 'react-router-dom';
import { BiSolidLeaf } from "react-icons/bi";
import Page1 from './MenuPage/Page1';


const MoreRestauInfo = () => {

  const [restauInfo , setRestauInfo] = useState([]);
  const { id }= useParams();


  // api call 
  useEffect(()=>{
   getMoreRestaurantInfo();
  },[]);

  const getMoreRestaurantInfo = async () =>{
    const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7877845&lng=80.9677658&restaurantId=${id}`);
    
    const moreRestInfo =  await data.json();
    console.log(moreRestInfo.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards);




  }

  return (
    <>
    <div className="restaurantMenu">
      <div className="topLine">
          <BiSolidLeaf color='green' />
          <h3>pure veg</h3>        
      </div>

        <Page1 />

    </div>
    </>
  )
}

export default MoreRestauInfo