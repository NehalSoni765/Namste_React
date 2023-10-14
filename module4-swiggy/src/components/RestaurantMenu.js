import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [responseData, setResponseData] = useState(null);
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const response = await fetch(MENU_API + restId); // "2174"
  //   const data = await response.json();
  //   setResponseData(data.data);
  // };
  const responseData = useRestaurantMenu(restId);

  const dummyData = "Dummy Data";

  if (responseData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    responseData && responseData?.cards?.[0]?.card?.card?.info;

  const categories =
    responseData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-lg">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItems={index === showIndex ? true : false} //control component
          //calback
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
          dummyData={dummyData}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
