import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Logout");
  //iusing link component it would not render the page

  //If no dependancy array => useEffect call on every render component
  useEffect(() => {}, []);

  const isOnlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status:{isOnlineStatus ? "\u{2705}" : "\u{1F534}"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="contact">Contact us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              loginButton == "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login")
            }
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
