import { imageId } from "../../constant";
import { AiFillStar } from "react-icons/ai";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  // console.log(restaurant);
  // console.log(props);
  const { card } = props;
  // console.log(card);

  const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } = card;

  return (
    <div className="card">
      <img src={imageId + cloudinaryImageId} alt="food_logo" />
      <h2>{name}</h2>
      <div className="newCont">
        <div className="Cardrating">
          <AiFillStar color="white" />
          <h4>{avgRating}</h4>
        </div>

        <h4 className="delivaryTime">
          {sla.deliveryTime} <span>mins</span>
        </h4>
      </div>
      <h3 style={{ fontSize: "13px" }}>{cuisines.join(" , ")}</h3>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
