import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Page Test Case", () => {
  // beforeAll(() => console.log("Before All"));
  // afterAll(() => console.log("After All"));
  // beforeEach(() => console.log("Before Each"));
  // afterEach(() => console.log("After Each"));

  it("Should load contact us component", () => {
    //render this component
    render(<Contact />);
    //screen
    const heading = screen.getByRole("heading"); //givees all headings
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    //render this component
    render(<Contact />);
    //screen
    const button = screen.getByRole("button"); //givees all headings
    //assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    //render this component
    render(<Contact />);
    //screen
    const inputName = screen.getByPlaceholderText("Name:"); //givees all headings
    //assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox"); //input we use textbox
    // console.log("inputBoxes ",inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});

test("Should load contact us component", () => {
  //render this component
  render(<Contact />);
  //screen
  const heading = screen.getByRole("heading"); //givees all headings
  //assertion
  expect(heading).toBeInTheDocument();
});

// test("Should load button inside contact us component", () => {
//   //render this component
//   render(<Contact />);
//   //screen
//   const button = screen.getByRole("button"); //givees all headings
//   //assertion
//   expect(button).toBeInTheDocument();
// });

// test("Should load button inside contact us component", () => {
//   //render this component
//   render(<Contact />);
//   //screen
//   const inputName = screen.getByPlaceholderText("Name:"); //givees all headings
//   //assertion
//   expect(inputName).toBeInTheDocument();
// });

// test('should load 2 input boxes on the Contact component', () => {
//   render(<Contact/>)
//   //Querying
//   const inputBoxes = screen.getAllByRole("textbox");//input we use textbox
//   // console.log("inputBoxes ",inputBoxes);
//   expect(inputBoxes.length).toBe(2)
//  })
