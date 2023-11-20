import React, { useEffect , useState } from 'react'


const Page1 = () => {
const [restaurantMenuOne , setFirstRestaurantMenu]=useState({});
  useEffect(()=>{
    getRestaurantMenu();
  },[]);

  const getRestaurantMenu = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7877845&lng=80.9677658&restaurantId=74901&submitAction=ENTER");

    const jsonData = data.json();

    console.log(jsonData);
    setFirstRestaurantMenu(jsonData.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);

  }
  return (
    <>

    <h1></h1>
    
    
    </>
  )
}

export default Page1