import React, { useEffect, useState } from 'react'
import './body.scss';
import './body.css';
import { URL, restaurantList } from '../../constant';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import SearchBar from '../SearchBar/SearchBar'
import Shimmer from '../Shimmmer/Shimmer';



const Body = () => {

  const [restaurants, setRestaurant] = useState(null);

  const filterRestaurant = (searchTerm) => {
    if(restaurants == null){
      return;
    }
    const filteredRestaurant = restaurants.filter(
      (ele) => ele.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRestaurant(filteredRestaurant);
  };

  // call api 
  useEffect(() => {
    getRestaurant();
  }, [])

  async function getRestaurant() {
    const data = await fetch(URL);
    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.success?.cards.length);
    // setRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    if (json?.data?.success?.cards.length == 5){
    setRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
    else{
      setRestaurant(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
  }
  return (
    <>
      <div className="searchCont">
        <SearchBar searchFun={filterRestaurant} />
      </div>

      <div className='bodyCard'>

        {
          restaurants != null ? (
          restaurants.map((element) => {
            return (
              <RestaurantCard card={element.info} delivaryInfo={element.info.sla} key={element.info.id} />
            )
          })
          ) : <Shimmer/>

        }
      </div>
     
    </>
  );
}

export default Body