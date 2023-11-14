import React, { useEffect, useState } from 'react'
import './body.scss';
import './Body.css';
import { URL, restaurantList } from '../../constant';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import SearchBar from '../SearchBar/SearchBar'
import Shimmer from '../Shimmmer/Shimmer';



const Body = () => {

  const [restaurants,setRestaurant]=useState([]);

  const  filterRestaurant = (searchTerm) =>{
    const filteredRestaurant = restaurantList.filter(
      (ele) => ele.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRestaurant(filteredRestaurant);
  };

// call api 
useEffect(()=>{
  getRestaurant();
},[])

async function getRestaurant(){
  const data = await fetch(URL);
  const json = await data.json();
  // console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  setRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
}
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