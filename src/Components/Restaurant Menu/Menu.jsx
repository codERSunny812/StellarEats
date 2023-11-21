import React, { useEffect, useState } from "react";
import "./menu.css";
import { useParams } from "react-router-dom";
import { imageId } from "../../constant";
import { AiFillStar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Discount from "./Discount";
import MoreRestauInfo from "./MoreRestauInfo";
// import { menuURL } from '../../constant'
import anim from "./Loading.json";
import Lottie from "lottie-react";
// import { useRestauMenu } from '../../util/useRestauMenu'

const Menu = () => {
  //this will give the route url address
  // console.log(useParams());
  let { id } = useParams();
  // console.log(id);

  // state variable to show the data
  // const restaurantMenu = useRestauMenu(id);
  const [loading, setLoading] = useState(true);
  const [restaurantMenu, setRestaurantMenu] = useState({});

  // if(restaurantMenu) setLoading(false);
  // call the api
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const menuData = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7877845&lng=80.9677658&restaurantId=${id}`
      );
      const menuJson = await menuData.json();
      // console.log(menuJson);
      setRestaurantMenu(menuJson?.data?.cards[0]?.card?.card.info);
      // console.log(restaurantMenu);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      // setLoading(false);
      // Handle the error (e.g., show a message to the user)
    }
  };

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
              <h5>{restaurantMenu.areaName}</h5>
              <p className="message">
                <FaLocationDot color="black" className="icon" />
                {restaurantMenu?.feeDetails?.message}
              </p>
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

          {/* second box for delivary and rate info */}

          <div className="secondBox">
            <div className="box1">
              <div className="delivaryTime">
                <PiTimerFill className="menuIcon" />
                <h2>{restaurantMenu?.sla?.deliveryTime} mins</h2>
              </div>
              <div className="rate">
                <HiOutlineCurrencyRupee className="menuIcon" />
                <h3>{restaurantMenu?.costForTwoMessage}</h3>
              </div>
            </div>
          </div>

          {/* third box for offer info */}
          <div className="thirdBox">
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

          <div className="fourthBox">
            <MoreRestauInfo />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
