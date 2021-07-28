import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CustomButton, { ICustomButton } from "./CustomButton";

afterEach(cleanup);

describe("<CustomButton/>", () => {
  it("renders the button with the correct text and className", () => {
    const buttonParam: ICustomButton = {
      onClick: jest.fn(),
      type: "primary",
      text: "hello world",
      className: "button-class-name",
    };

    render(<CustomButton {...buttonParam} />);
    const buttonText = screen.getByText(/hello world/i);
    const button = screen.getByTestId("custom-button");
    expect(buttonText).toBeInTheDocument();
    expect(button.classList.contains("button-class-name")).toBeTruthy();
  });

  it("calls the onClick provided", () => {
    const buttonParam: ICustomButton = {
      onClick: jest.fn(),
      type: "primary",
      text: "hello world",
      className: "button-class-name",
    };

    render(<CustomButton {...buttonParam} />);
    const button = screen.getByTestId("custom-button");
    button.click();
    expect(buttonParam.onClick).toHaveBeenCalledTimes(1);
  });
});
