import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomButton } from "../../../shared/buttons/customButton";

describe("shared/buttons/customButton", () => {
  it("should display a customButtom when it is created", () => {
    // Arrange

    // Act
    render(<CustomButton />);

    const button = screen.getByRole("button");
    // Assert
    expect(button).toBeInTheDocument();
  });
  it("should call onClick function when i press button", () => {
    // Arrange
    const props = {
      onClick: jest.fn(),
    };
    // Act
    render(<CustomButton {...props} />);

    const button = screen.getByRole("button");

    userEvent.click(button);

    // Assert
    waitFor(() => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
