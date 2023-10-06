import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId) => {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + restId); // "2174"
    const data = await response.json();
    setResponseData(data?.data);
  };
  return responseData;
};

export default useRestaurantMenu;
