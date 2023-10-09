import { useDispatch } from "react-redux";
import { CDN_IMAGE_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const MenuList = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log("item ", item);
  };

  return (
    <div>
      {itemCards?.length > 0 &&
        itemCards?.map((item) => {
          const { id, name, price, defaultPrice, description, imageId } =
            item?.card?.info;

          return (
            <div
              key={id}
              className="border-b-2 border-gray-200 text-left p-4 flex justify-between"
            >
              <div className="pr-3 w-11/12">
                <div className="py-2">
                  <span>{name}</span>
                  <p>{"₹ " + (price || defaultPrice) / 100}</p>
                </div>
                <p className="text-xs py-2">{description}</p>
              </div>
              <div className="w-36">
                <div className="absolute ">
                  <button
                    className="p-2 ml-8 mr-8 rounded-md bg-black text-white shadow-lg m-auto"
                    onClick={() => handleAddItem(item)} //callback function
                    // onClick={handleAddItem} //it trigger
                    // onClick={handleAddItem(item)} //every render time called
                  >
                    ADD +
                  </button>
                </div>
                <img
                  src={CDN_IMAGE_URL + imageId}
                  className="h-20 my-auto shadow-sm rounded-md"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuList;
