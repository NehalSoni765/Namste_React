import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButton,setLoginButton] = useState("Logout");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>loginButton=="Login"?setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
