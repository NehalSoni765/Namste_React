import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  //more eficieint
  const cartItems = useSelector((store) => store.cart.items);
  //   //less eficieint bcs it update all store instead of one
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 text-white bg-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>{" "}
        {!cartItems.length && <h1>Cart is empty. Add items to the cart.</h1>}
        <MenuList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
