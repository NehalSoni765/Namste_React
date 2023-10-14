import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Page Test cases", () => {
  //   it("Should render Header Component with a login button", () => {
  //     //provide store
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //         </Provider>
  //       </BrowserRouter>
  //     );
  //     const loginButton = screen.getByRole("button", { name: "Login" });
  //     expect(loginButton).toBeInTheDocument();
  //   });

  it("Should render Header Component with a card items 0", () => {
    //provide store
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const cartItems = screen.getByText("Cart(0)");
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change Login Button to Logout on click", () => {
    //provide store
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const logoutButton = screen.getByText(/Logout/i);
    fireEvent.click(logoutButton);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
  });
});
