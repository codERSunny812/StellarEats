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
import { FaLeaf } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItems} from "../../util/cartSlice"

const MoreRestaurantInfo = (props) =>{
  const {items} = props;
  return(
    <>
  <h2>{items.name}</h2>
  <h4>{items.price}</h4>

    </>
  );

}



const MenuSection = (props) => {
  // console.log(props);
  const {items} = props;
  console.log(items.card.card); //✅

  return (
    
      items.card.card.title && (
        <div className="FullMenuContainer">
          <div className="title">
            <h2>{items.card.card.title}</h2>
            <hr />
          {  
            items.card.card.itemCard && (Object.values(items.card.card.itemCard).map((element) => {
              return(
             <MoreRestaurantInfo  restaInfo={element.card.info} key={element.card.info.id}/>
              )
            }))
           
          }
            
           
          </div>
          <div className="menuSectionIcon">+</div>
        </div>
      )
    

  );

}



const Menu = () => {

  //this will give the route url address
  let { id } = useParams();
  // console.log(id);

  // state variable to show the data
  const [loading, setLoading] = useState(true);
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const [FullMenu,setFullMenu] = useState({});

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const menuData = await fetch(`${menuURL}/${id}`);
      const menuJson = await menuData.json();
      // console.log(menuJson.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
      setRestaurantMenu(menuJson?.data?.cards[0]?.card?.card.info);
      setFullMenu(menuJson.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards)
      setLoading(false);
    } 
    catch (error) {
      console.error("Error fetching restaurant menu:", error);
      // setLoading(false);
      // Handle the error (e.g., show a message to the user)
    }
  };

  const dispatch = useDispatch();

  const handleAddItem = () =>{
    dispatch(addItems("grapes"));
  }

  return (
    <>
      {loading ? (
        <Lottie animationData={anim} className="loading" />
      ) : (
        <div className="menuContainer">
          {/* first box for restaurant info */}
          <div className="firstBox">
            <div className="restaurantName">
              <h2>{restaurantMenu.name}</h2>
              <h4>{restaurantMenu.cuisines.join(" , ")}</h4>
                <h5>{restaurantMenu?.areaName +" | "+ restaurantMenu?.sla?.lastMileTravelString}</h5>
              <h6 className="message">
                  <IoBicycle color="black" className="icon" />
                {restaurantMenu?.feeDetails?.message}
              </h6>
            </div>

            <div className="rating">
              <div className="avgRating">
                <AiFillStar color="green" />
                <h4>{restaurantMenu.avgRating}</h4>
              </div>
              <hr className="line" />
              <h5>{restaurantMenu.totalRatingsString}</h5>
            </div>
          </div>

          <div className="secondBox">
           {/* delivary time section */}

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
                      restaurantMenu.aggregatedDiscountInfo.descriptionList
                    }
                  />
                ) : (
                  <p>No discounts available</p>
                )}

           </div>

          </div>

          <button onClick={handleAddItem}>add item</button>

          <div className="thirdBox">
            
          <div className="topText">
             <FaLeaf color="green"/>
             <h4>veg only</h4>
          </div>

        {
          FullMenu.map((items)=>{
            return(
              <MenuSection items={items} key={Math.random()} />
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
