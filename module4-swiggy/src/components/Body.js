import { useState } from "react";
import { resList } from "../utils/resList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  //state variable  = super powerful variable
  const [state, setstate] = useState(resList);

//   //destructuring 
//   const arr = useState(resList);
//   const [listItems,setListItems] = arr;
//   const list = arr[0];
//   const setList = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            setstate((state) =>
              state.filter((restaurant) => restaurant.data.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {state.map((restaurant) => {
          return (
            <RestaurantCard resData={restaurant} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
