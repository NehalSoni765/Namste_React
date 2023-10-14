import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    slaString,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    cloudinaryImageId,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="res-card m-3 p-3 bg-transparent w-60 min-h-[20rem] rounded-sm hover:shadow-md"
    >
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

//Higher order component : it takes component and output is component with adding top bottom feature
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Prmoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
