// This will basically tellls the menu of the restaurant
//call the api and return the data where the hoook is called
import { useState, useEffect } from "react";

export const useRestauMenu = (id) => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);

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
      setRestaurantMenuData(menuJson?.data?.cards[0]?.card?.card.info);
      // console.log(restaurantMenu);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      // setLoading(false);
      // Handle the error (e.g., show a message to the user)
    }
  };

  return restaurantMenuData;
};
