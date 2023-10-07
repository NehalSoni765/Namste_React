import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    slaString,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    cloudinaryImageId,
  } = resData.info;
  return (
    <div className="res-card m-3 p-3 bg-transparent w-60 min-h-[20rem] rounded-sm hover:shadow-md">
      <img
        className="res-logo shadow-md rounded-md"
        alt="meghna food"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwoString}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
