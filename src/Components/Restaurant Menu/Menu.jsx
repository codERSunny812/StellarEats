import React, { useEffect , useState } from 'react'
import './menu.css'
import { useParams } from 'react-router-dom'
import { imageId } from '../../constant'
import { AiFillStar } from 'react-icons/ai'
import { CiLocationOn } from "react-icons/ci";
import { CgTimer } from "react-icons/cg";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Discount from './Discount'









const Menu = () => {
    //this will give the route url address
    // console.log(useParams());
    let {id} = useParams();
    // console.log(id); 
    // state variable to show the data 
    const [restaurantMenu,setRestaurantMenu] = useState({});

    // calling the api 
    useEffect(()=>{
     getRestaurantMenu();
    },[]);

    const getRestaurantMenu = async () =>{
        try {
            const menuData = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7877845&lng=80.9677658&restaurantId=138854");
            const menuJson = await menuData.json();
            // console.log(menuJson.data.cards[0].card.card.info);
            setRestaurantMenu(menuJson?.data?.cards[0]?.card?.card?.info);
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
            // Handle the error (e.g., show a message to the user)
        }
    }
    // console.log(restaurantMenu?.feeDetails?.message);

  return (
   <>
   {/* main container */}
   <div className="menuContainer">

    {/* first box for restaurant info */}
    <div className="firstBox">


        <div className="restaurantName">
        <h2>{restaurantMenu.name}</h2>
        <h4>{restaurantMenu.cuisines}</h4>
        <h5>{restaurantMenu.areaName}</h5>
        <p className='message'>
        <CiLocationOn color='black' className='icon'/>
        
        {restaurantMenu?.feeDetails?.message}
        </p>
        </div>


        <div className="rating">
        <div className="avgRating">
        <AiFillStar color='green' />
        <h4>{restaurantMenu.avgRating}</h4>
        </div>
        <hr className='line' />
        
        <h5>{restaurantMenu.totalRatingsString}</h5>
        </div>


    </div>

{/* dotted line */}
    <hr className='dottedLine'/>

{/* second box for delivary and rate info */}
    <div className="secondBox">
    <div className="box1">
    <div className="delivaryTime">
    <CgTimer className='menuIcon' />
    <h2>{restaurantMenu?.sla?.deliveryTime} mins</h2>
    </div>
    <div className="rate">
    <HiOutlineCurrencyRupee className='menuIcon' />
    <h3>{restaurantMenu?.costForTwoMessage}</h3>
    </div>
       
       
        </div>
    </div>

{/* third box for offer info */}
    <div className="thirdBox">
    <Discount discountInfo={restaurantMenu?.aggregatedDiscountInfo?.descriptionList}/>
    </div>




   </div>

   </>
  )
}

export default Menu