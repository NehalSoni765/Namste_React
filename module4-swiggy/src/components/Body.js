import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //state variable  = super powerful variable
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  //   //destructuring
  //   const arr = useState(resList);
  //   const [listItems,setListItems] = arr;
  //   const list = arr[0];
  //   const setList = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const arrayOfCards = json?.data?.cards || [];
    const restaurants_list = "restaurant_grid_listing";
    if (arrayOfCards?.length > 0) {
      arrayOfCards.forEach((cardObj) => {
        if (cardObj.card.card?.id === restaurants_list) {
          setListOfRestaurants(
            cardObj.card.card.gridElements.infoWithStyle.restaurants
          );
          setFilteredRestaurant(
            cardObj.card.card.gridElements.infoWithStyle.restaurants
          );
        }
      });
    }
  };

  const isOnlineStatus = useOnlineStatus();

  if (!isOnlineStatus)
    return (
      <h1>
        Look's like you'r offline !! PLease check your internet connection.
      </h1>
    );

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log("body render");

  return !listOfRestaurant.length ? (
    <Shimmer />
  ) : (
    //test cases puproses
    // return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            name="search"
            className="search-box  border border-gray-600 mr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.trim());
            }}
          />
          <button
            className="px-3 py-1 bg-blue-400 rounded-md"
            type="submit"
            aria-label="Search"
            onClick={() => {
              //filter restautrant cards and update the UI
              const filteredRestaurant = listOfRestaurant?.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn bg-gray-200 px-2 py-1 rounded-md"
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
        <div className="m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input
            type="text"
            name="search"
            className="search-box  border border-gray-600 mr-4 pl-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap m-10">
        {filteredRestaurant?.length > 0 &&
          filteredRestaurant?.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`restaurants/${restaurant.info.id}`}
              >
                {!restaurant?.info?.promoted ? (
                  <RestaurantCardPromoted resData={restaurant.info} />
                ) : (
                  <RestaurantCard
                    resData={restaurant.info}
                    key={restaurant.info.id}
                  />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
