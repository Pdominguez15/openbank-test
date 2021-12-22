import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CustomInput } from "../../../shared/inputs/customInput";
import { Formik } from "formik";

describe("shared/inputs/customInput", () => {
  it("should display a CustomInput when it is created", () => {
    // Arrange
    const props = {
      name: "test",
      placeholder: "placeholder",
      type: "test",
    };
    // Act
    render(
      <Formik>
        <CustomInput {...props} />
      </Formik>
    );

    const input = screen.getByPlaceholderText("placeholder");
    // Assert
    expect(input).toBeInTheDocument();
  });
  it("should display a CustomInput with image when i feed an image", () => {
    // Arrange
    const props = {
      name: "test",
      placeholder: "placeholder",
      imageSrc: "myPhoto.png",
      type: "test",
    };
    // Act
    render(
      <Formik>
        <CustomInput {...props} />
      </Formik>
    );

    const input = screen.getByPlaceholderText("placeholder");
    const img = screen.getByRole("img");
    // Assert
    expect(input).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
