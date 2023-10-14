import React from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummyData }) => {
  const handleClick = () => {
    setShowIndex(); //callback function ()=>setshowIndex(index)
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-50 shadow-md my-4 p-2 ">
      {/* accordian header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold px-2">{`${data.title} (${data?.itemCards?.length})`}</span>
        <span>{showItems ? "\u{1F53A}" : "\u{1F53B}"}</span>
      </div>
      {/* accordian body */}
      {showItems && data?.itemCards && (
        <MenuList itemCards={data?.itemCards} />
      )}
      {/* {showItems && data?.itemCards && (
        <div>
          {data?.itemCards.length > 0 &&
            data?.itemCards.map((item) => {
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
                      <button className="p-2 ml-8 mr-8 rounded-md bg-black text-white shadow-lg m-auto">
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
      )} */}
    </div>
  );
};

export default RestaurantCategory;
