import React, { useEffect, useState } from 'react'
import './body.scss';
import './body.css';
import { URL } from '../../constant';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import SearchBar from '../SearchBar/SearchBar'
import Shimmer from '../Shimmmer/Shimmer';
import NoRestaurant from '../NoRestaurant/NoRestaurant';



const Body = () => {

  const [filtredRestaurant, setFiltredRestaurant] = useState(null);
  const [allrestaurant,setAllRestaurant] = useState(null)

  const filterRestaurant = (searchTerm) => {
    const searchedRestaurant = allrestaurant.filter(
      (ele) => ele.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltredRestaurant(searchedRestaurant);
  };

  // call api 
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json.data.cards);

      
      setFiltredRestaurant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
      setAllRestaurant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  }

//  early return 
  // if (!allrestaurant ) return null;
  return (
    <>
      <div className="searchCont">
        <SearchBar searchFun={filterRestaurant} />
      </div>

      <div className='bodyCard'>
        {
          
          allrestaurant != null ? (

            filtredRestaurant.length != 0 ?(
            filtredRestaurant.map((element) => {
              return (
                <RestaurantCard card={element.info} delivaryInfo={element.info.sla} key={element.info.id} />
              )
            })
            ) : (
            <NoRestaurant/>
            )

          ) : <Shimmer />

        }
      </div>

    </>
  );
}

export default Body