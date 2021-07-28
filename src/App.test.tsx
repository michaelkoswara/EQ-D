import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

test("renders the root component without crashing", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appTitle = screen.getByText(/EQ-D/i);
  expect(appTitle).toBeInTheDocument();
});
