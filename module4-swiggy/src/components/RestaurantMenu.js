import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [responseData, setResponseData] = useState(null);
  const { restId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const response = await fetch(MENU_API + restId); // "2174"
  //   const data = await response.json();
  //   setResponseData(data.data);
  // };
  const responseData = useRestaurantMenu(restId);

  if (responseData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    responseData && responseData?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    responseData.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((itemCard) => {
          return (
            <li key={itemCard.card.info.uuid}>
              {itemCard.card.info.name}- Rs.{" "}
              {itemCard.card.info.price / 100 || itemCard.card.info}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
