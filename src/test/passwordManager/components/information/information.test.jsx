import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Information } from "../../../../views/passwordManager/components/information/information";

import i18n from "../../../../i18n";
import { I18nextProvider } from "react-i18next";

describe("views/passwordManager/components/information/information", () => {
  it("should display a Information when it is created", () => {
    // Arrange

    // Act
    render(
      <I18nextProvider i18n={i18n}>
        <Information />
      </I18nextProvider>
    );

    const imgs = screen.getAllByRole("img").length;
    const headings = screen.getAllByRole("heading").length;
    const buttons = screen.getAllByRole("button").length;

    // Assert
    expect(buttons).toBe(1);
    expect(headings).toBe(2);
    expect(imgs).toBe(2);
  });
});
