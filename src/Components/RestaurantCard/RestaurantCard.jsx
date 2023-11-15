import { imageId } from '../../constant';
import { AiFillStar } from 'react-icons/ai'
import './RestaurantCard.css'

const RestaurantCard = (props) => {
    // console.log(restaurant);
    // console.log(props);
    const { card } = props;
    // console.log(card);

    const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } = card;


    return (
        <div className='card'>
            <img src={imageId + cloudinaryImageId} alt="food_logo" />
            <h2>{name}</h2>
            <div className="newCont">
                <AiFillStar color='green' />
                <h4>{avgRating}</h4>
                <h4>{sla.deliveryTime}mins</h4>
            </div>
            <h3>{cuisines.join(" , ")}</h3>
            <h5>{areaName}</h5>

        </div>
    );
}

export default RestaurantCard;