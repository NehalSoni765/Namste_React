import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  //header component for cart
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Mains- A la Carte (10)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  const addbtn = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addbtn[0]);
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();

  fireEvent.click(addbtn[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  //check cart has two items
  expect(screen.getAllByTestId("foodItems").length).toBe(12); //10+2

  //clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(10); //10+2
  expect(screen.getByText(/Cart is empty/)).toBeInTheDocument(); //10+2
});
