import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PasswordManager } from "../../views/passwordManager/passwordManager";
import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";

const ServiceApi = require("../../services/api");

describe("views/passwordManager/passwordManager", () => {
  it("should display first step active with information when i render it", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <PasswordManager />
      </I18nextProvider>
    );

    const stepper = document.getElementsByClassName("stepper-container").length;
    const information = document.getElementsByClassName(
      "information-container"
    ).length;
    const button = screen.getByRole("button");

    // Assert
    expect(stepper).toBe(1);
    expect(information).toBe(1);
    expect(button).toBeInTheDocument();
  });
  it("should display second step active with form when i click on the button", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <PasswordManager />
      </I18nextProvider>
    );

    const stepper = document.getElementsByClassName("stepper-container").length;

    const button = screen.getByRole("button");

    userEvent.click(button);

    const form = document.getElementsByClassName("form-container").length;

    // Assert
    expect(stepper).toBe(1);
    expect(form).toBe(1);
  });

  it("should display third step active with form when (-I click on the button on the first view, Write a password a click the button on the second view", async () => {
    // Arrange
    const addMock = jest.spyOn(ServiceApi, "submitForm").mockResolvedValue();
    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <PasswordManager />
      </I18nextProvider>
    );

    const stepper = document.getElementsByClassName("stepper-container").length;

    const button = screen.getByRole("button");

    userEvent.click(button);

    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const repeatPasswordInput = screen.getByPlaceholderText(
      "Repeat your Password"
    );

    userEvent.type(passwordInput, "Prueba123");
    userEvent.type(repeatPasswordInput, "Prueba123");
    const buttonNext = screen.getAllByRole("button")[1];

    userEvent.click(buttonNext);

    // Assert
    await waitFor(() => {
      const result = document.getElementsByClassName("result-container").length;
      expect(result).toBe(1);
    });
  });
});
