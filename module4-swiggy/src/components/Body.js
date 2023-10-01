import { resList } from "../utils/resList"
import RestaurantCard from "./RestaurantCard"

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map(restaurant=>{
                    return <RestaurantCard resData={restaurant} key={restaurant.data.id} />
                })}
            </div>
        </div>
    )
}

export default Body