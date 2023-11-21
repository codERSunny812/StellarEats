import React, { useEffect, useState } from "react";
import "./body.scss";
import "./body.css";
import { URL } from "../../constant";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SearchBar from "../SearchBar/SearchBar";
import Shimmer from "../Shimmmer/Shimmer";
import NoRestaurant from "../NoRestaurant/NoRestaurant";
import { Link } from "react-router-dom";
import useOnline from "../../util/useOnline";
import Anim from "./response.json";
import Lottie from "lottie-react";

const Body = () => {
  const [filtredRestaurant, setFiltredRestaurant] = useState(null);
  const [allrestaurant, setAllRestaurant] = useState(null);

  // search logic of the app
  const filterRestaurant = (searchTerm) => {
    const searchedRestaurant = allrestaurant.filter((ele) =>
      ele.info.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      setFiltredRestaurant(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurant(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(allrestaurant);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // check that the user in Online or not
  const isOnline = useOnline();

  if (!isOnline)
    return <>
      <div className="NoInterNetContainer">
        <h3>no internet acess</h3>
        <Lottie animationData={Anim} className="isOnlineAnim" />
      </div>
    </>

  return (
    <>
      <div className="searchCont">
        <SearchBar searchFun={filterRestaurant} />
      </div>
      <div className="bodyCard">
        {allrestaurant != null ? (
          filtredRestaurant.length != 0 ? (
            filtredRestaurant.map((element) => {
              return (
                <Link
                  to={"/restaurant/" + element.info.id}
                  key={element.info.id}
                  className="link"
                >
                  <RestaurantCard
                    card={element.info}
                    delivaryInfo={element.info.sla}
                  />
                </Link>
              );
            })
          ) : (
            <NoRestaurant />
          )
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Body;
