import React from "react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from ".././mocks/restCardMock.json";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Restaurant card test cases", () => {
  it("Should render restaurant card component with data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("The Rameshwaram Cafe");
    expect(name).toBeInTheDocument();
  });

  it("Should render restaurant card component with promoted label", () => {
    // Use the withPromotedLabel HOC to wrap the RestaurantCard component
    render(withPromotedLabel(RestaurantCard)({ resData: MOCK_DATA }));

    const name = screen.getByText("The Rameshwaram Cafe");
    expect(name).toBeInTheDocument();
  });

});
