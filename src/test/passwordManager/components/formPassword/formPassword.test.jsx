import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FormPassword } from "../../../../views/passwordManager/components/formPassword/formPassword";

import i18n from "../../../../i18n";
import { I18nextProvider } from "react-i18next";

describe("views/passwordManager/components/formPassword/formPassword", () => {
  it("should display a FormPassword when it is created", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <FormPassword />
      </I18nextProvider>
    );

    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const repeatPasswordInput = screen.getByPlaceholderText(
      "Repeat your Password"
    );
    const clueInput = screen.getByPlaceholderText("Enter your clue");

    // Assert
    expect(passwordInput).toBeInTheDocument();
    expect(repeatPasswordInput).toBeInTheDocument();
    expect(clueInput).toBeInTheDocument();
  });

  it("should display a error on passwordInput when I submit error", async () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <FormPassword />
      </I18nextProvider>
    );

    const button = screen.getAllByRole("button")[1];

    userEvent.click(button);

    // Assert
    await waitFor(() => {
      const errors = document.getElementsByClassName("invalid-feedback").length;
      const passwordRequired = screen.getByText("The password is required.");
      const repeatedPasswordRequired = screen.getByText(
        "Repeat the password is required."
      );

      expect(errors).toBe(2);
      expect(passwordRequired).toBeInTheDocument();
      expect(repeatedPasswordRequired).toBeInTheDocument();
    });
  });

  it("should display a error on passwordInput when the password do not match", async () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <FormPassword />
      </I18nextProvider>
    );

    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const repeatPasswordInput = screen.getByPlaceholderText(
      "Repeat your Password"
    );

    userEvent.type(passwordInput, "Prueba123");
    userEvent.type(repeatPasswordInput, "Preba123");
    const button = screen.getAllByRole("button")[1];

    userEvent.click(button);

    // Assert
    await waitFor(() => {
      const errors = document.getElementsByClassName("invalid-feedback").length;
      const passwordMatch = screen.getByText("Passwords do not match.");

      expect(errors).toBe(1);
      expect(passwordMatch).toBeInTheDocument();
    });
  });

  it("should display a error on passwordInput when the password is lower than 8 characteres", async () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <FormPassword />
      </I18nextProvider>
    );

    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const repeatPasswordInput = screen.getByPlaceholderText(
      "Repeat your Password"
    );

    userEvent.type(passwordInput, "P123");
    userEvent.type(repeatPasswordInput, "P123");
    const button = screen.getAllByRole("button")[1];

    userEvent.click(button);

    // Assert
    await waitFor(() => {
      const errors = document.getElementsByClassName("invalid-feedback").length;
      const min = screen.getByText(
        "The password is very short - it must be at least 8 characters."
      );

      expect(errors).toBe(1);
      expect(min).toBeInTheDocument();
    });
  });

  it("should display a error on passwordInput when the password dont have 1 capital letter and 1 number", async () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <FormPassword />
      </I18nextProvider>
    );

    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const repeatPasswordInput = screen.getByPlaceholderText(
      "Repeat your Password"
    );

    userEvent.type(passwordInput, "prueba123");
    userEvent.type(repeatPasswordInput, "prueba123");
    const button = screen.getAllByRole("button")[1];

    userEvent.click(button);

    // Assert
    await waitFor(() => {
      const errors = document.getElementsByClassName("invalid-feedback").length;
      const min = screen.getByText(
        "The password must include a number and a capital letter."
      );

      expect(errors).toBe(1);
      expect(min).toBeInTheDocument();
    });
  });
});
