import React, { useState } from 'react'
import './body.scss';
import './Body.css';
import { restaurantList } from '../../constant';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import SearchBar from '../SearchBar/SearchBar'






const Body = () => {
  const [restaurants,setRestaurant]=useState(restaurantList);
  const  filterRestaurant = (searchTerm) =>{
    const filteredRestaurant = restaurantList.filter(
      (ele) => ele.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRestaurant(filteredRestaurant);
  };
  return (
    <>
    <div className="searchCont">
        <SearchBar onSearch={filterRestaurant} />
      </div>
    <div className='bodyCard'>
        {
            restaurants.map((element)=>{
                return(
                    <RestaurantCard  card={element.info} delivaryInfo={element.info.sla} key={element.info.id} />
                );
            })
        }
    </div>
    </>
  );
}

export default Body