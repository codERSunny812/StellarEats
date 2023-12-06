import React, { useEffect, useState } from "react";
import "./menu.css";
import { useParams } from "react-router-dom";
import { imageId } from "../../constant";
import { AiFillStar } from "react-icons/ai";
import { IoBicycle } from "react-icons/io5";
import { MdTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Discount from "./Discount";
import anim from "./Loading.json";
import Lottie from "lottie-react";
import { menuURL } from "../../constant";
import { FaArrowDown, FaLeaf } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../util/cartSlice";







const MenuRestInfo = (props) =>{
  // console.log(props.items);
  // console.log(props);
  const dispatch = useDispatch();

  const addTheItem = (props) => {
    dispatch(addItems(props));
  }
  return props?.state ?  (
    (props?.items?.imageId) && <div className="menuRestInfo">
      <div className="menuRestInfoCont">
        <div className="aboutFood">
          <h2>{props?.items?.name}</h2>
          <p>{props?.items?.description}</p>
        </div>
        <div className="foodImage">
          <img src={imageId + props?.items?.imageId} alt="food image" />
          <div className="btnAdd">
            <button className="addBtn" onClick={()=>{addTheItem(props.items)}}>add +</button>
          </div>

        </div>


      </div>
    </div>
   
  ) : null
  
  
}

// section for menu 
const MenuSection = (props) => {
  // console.log(props);

  const [toggleMenu,setMenu] = useState(true);

  // handle the toggle of the menu bar 
  const handleMenuState = () =>{
    if(toggleMenu){
    setMenu(false);
    }else{
      setMenu(true);
    }
    
  }
  
  
  const {items} = props;
  // console.log(items);
  // console.log(items.itemCards);
  return (
    
      items?.itemCards && (
        <div className="FullMenuContainer">
          <div className="title">
            <div className="titleOfMenu">
            <h2>{items?.title}</h2>
            <div className="collapseIcon" onClick={handleMenuState}>
              <span style={{ color: 'black' }}>
                {
                  toggleMenu ? (<FaArrowUp />) : (<FaArrowDown />)
                }
               
              </span>
              
            </div>
            </div>
            <div className="breakContainer"></div>
            
            {/* //call the api for more menu section */}
            {
           items?.itemCards?.map((list)=>{
            return(
              <MenuRestInfo items={list?.card?.info} state={toggleMenu} key={list?.card?.info?.id}/>
            )
           })
            }
            
          </div>
        </div>
      )
  

  );

}


// menu of the any restaurant 
const Menu = () => {

  //this will give the route url address
  let { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const [FullMenu,setFullMenu] = useState({});
 
  // hook to call the restaurant menu
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      // const menuData = await fetch(`${menuURL}${id}`);
      const menuData = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7877845&lng=80.9677658&restaurantId=${id}`)
      const menuJson = await menuData?.json();
      // console.log(menuJson);
      // console.log(menuJson.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
      setRestaurantMenu(menuJson?.data?.cards[0]?.card?.card?.info);
      setFullMenu(menuJson?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      setLoading(false);
    } 
    catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Lottie animationData={anim} className="loading" />
      ) : (
        <div className="menuContainer">
          {/* restaurant information */}
          <div className="firstBox">
            <div className="restaurantName">
              <h2>{restaurantMenu?.name}</h2>
              <h4>{restaurantMenu?.cuisines?.join(" , ")}</h4>
                <h5>{restaurantMenu?.areaName +" | "+ restaurantMenu?.sla?.lastMileTravelString}</h5>
              <h6 className="message">
                  <IoBicycle color="black" className="icon" />
                {restaurantMenu?.feeDetails?.message}
              </h6>
            </div>

            <div className="rating">
              <div className="avgRating">
                <AiFillStar color="green" />
                <h4>{restaurantMenu?.avgRating}</h4>
              </div>
              <hr className="line" />
              <h5>{restaurantMenu?.totalRatingsString}</h5>
            </div>
          </div>



          {/* delivary and discount  of all  restaurant  */}
          <div className="secondBox">
        
           <div className="delivarySection">

            <div className="delivaryTimeString">
              <MdTimelapse className="delivarySectionIcon"/>
                  {restaurantMenu.sla?.delivaryTime ? (
                    <>{restaurantMenu.sla.delivaryTime}</>
                  ) : (
                    <h6>22 MINS</h6>
                  )}
              
            
            </div>

            <div className="costOfItem">
                  <HiOutlineCurrencyRupee className="delivarySectionIcon" />
                  {restaurantMenu.costForTwoMessage}
            </div>

           </div>

           {/* discount section */}

           <div className="discountSection">
                {restaurantMenu?.aggregatedDiscountInfo?.descriptionList?.length >
                  0 ? (
                  <Discount
                    discountInfo={
                      restaurantMenu?.aggregatedDiscountInfo?.descriptionList
                    }
                  />
                ) : (
                  <p>No discounts available</p>
                )}

           </div>

          </div>

       

            {/* menu of the restaurant  */}
          <div className="thirdBox">
            
          <div className="topText">
             <FaLeaf color="green"/>
             <h4>veg only</h4>
          </div>

        {
          FullMenu.map((items)=>{
            return(
              <MenuSection items={items?.card?.card} key={Math.random()} />
            );
          })
        }
          </div>
        </div>
      )}
    </>
 
  );
};

export default Menu;
