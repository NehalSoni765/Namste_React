import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({resData})=>{
    const {slaString,name,cuisines,avgRating,costForTwoString,cloudinaryImageId} =resData.data;
    console.log("resData ",resData);
return(
    <div className="res-card">
        <img className="res-logo" alt="meghna food" src={CDN_IMAGE_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwoString}</h4>
        <h4>{slaString}</h4>
    </div>
)
}
export default RestaurantCard;