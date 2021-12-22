import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Result } from "../../../../views/passwordManager/components/result/result";

import i18n from "../../../../i18n";
import { I18nextProvider } from "react-i18next";

describe("views/passwordManager/components/result/result", () => {
  it("should display a Result Correct when it is created and its feeds with false value", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <Result />
      </I18nextProvider>
    );

    const imgs = screen.queryByAltText("Error");
    const heading = screen.queryByText("There was an error");
    const p = screen.queryByText(
      "We couldn't create your Master Password. Please try again later."
    );
    const buttons = screen.getAllByRole("button").length;

    // Assert
    expect(imgs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(buttons).toBe(1);
  });

  it("should display a Result Correct when it is created and its feeds with false value", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <Result isOk={true} />
      </I18nextProvider>
    );

    const imgs = screen.queryByAltText("Correct");
    const heading = screen.queryByText(
      "Your Password Manager is already created!"
    );
    const p = screen.queryByText("You can check it from the menu.");
    const buttons = screen.getAllByRole("button").length;

    // Assert
    expect(imgs).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(buttons).toBe(1);
  });
});
