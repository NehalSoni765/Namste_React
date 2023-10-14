import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Logout");
  //iusing link component it would not render the page

  //If no dependancy array => useEffect call on every render component
  useEffect(() => {}, []);

  const isOnlineStatus = useOnlineStatus();

  //useCOntextAPI
  const { loggedInUser } = useContext(UserContext);

  // //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg mb-2 bg-red-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li>Online status:{isOnlineStatus ? "\u{2705}" : "\u{1F534}"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="cart">Cart({cartItems.length})</Link>
          </li>
          <button
            className="login"
            name="login"
            onClick={() =>
              loginButton == "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login")
            }
          >
            {loginButton}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
