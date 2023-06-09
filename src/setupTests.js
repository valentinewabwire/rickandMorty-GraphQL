// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

it("renders Rick and Morty Characters", () => {
  render(<App />);
  expect(screen.getByText("Rick and Morty Characters")).toBeInTheDocument();
});
