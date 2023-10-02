import { useEffect, useState } from "react";
import { resList } from "../utils/resList";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable  = super powerful variable
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //   //destructuring
  //   const arr = useState(resList);
  //   const [listItems,setListItems] = arr;
  //   const list = arr[0];
  //   const setList = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurants_list = "restaurant_grid_listing";
    arrayOfCards.forEach((cardObj) => {
      if (cardObj.card.card?.id === restaurants_list) {
        setListOfRestaurants(
          cardObj.card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurant(
            cardObj.card.card.gridElements.infoWithStyle.restaurants
        )
      }
    });
  };
  console.log("body render");
  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.trim());
            }}
          />
          <button
            type="submit"
            onClick={() => {
              //filter restautrant cards and update the UI
              const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            setListOfRestaurants((listOfRestaurant) =>
              listOfRestaurant.filter(
                (restaurant) => restaurant.data.avgRating > 4
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.length > 0 &&
            filteredRestaurant.map((restaurant) => {
            return (
              <RestaurantCard resData={restaurant} key={restaurant.info.id} />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
