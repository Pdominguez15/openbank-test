import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Stepper } from "../../../shared/stepper/stepper";

describe("shared/stepper/stepper", () => {
  it("should display a Stepper when it is created", () => {
    // Arrange
    const initialSteps = [
      { text: "1", active: true, completed: false },
      { text: "2", active: false, completed: false },
      { text: "3", active: false, completed: false },
    ];
    // Act
    render(<Stepper steps={initialSteps} />);

    const step1 = screen.getByText("1");
    const step2 = screen.getByText("2");
    const step3 = screen.getByText("3");
    const separator =
      document.getElementsByClassName("stepper-separator").length;

    // Assert
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
    expect(separator).toBe(2);
  });

  it("should display 1 steps active when it feeds with 1 elements active", () => {
    // Arrange
    const initialSteps = [
      { text: "1", active: true, completed: false },
      { text: "2", active: false, completed: false },
      { text: "3", active: false, completed: false },
    ];
    // Act
    render(<Stepper steps={initialSteps} />);

    const completed = document.getElementsByClassName("step-active").length;

    // Assert
    expect(completed).toBe(1);
  });

  it("should display 0 steps completed when it feeds with 3 elements incompleted", () => {
    // Arrange
    const initialSteps = [
      { text: "1", active: true, completed: false },
      { text: "2", active: false, completed: false },
      { text: "3", active: false, completed: false },
    ];
    // Act
    render(<Stepper steps={initialSteps} />);

    const completed = document.getElementsByClassName("step-completed").length;

    // Assert
    expect(completed).toBe(0);
  });

  it("should display (1 steps completed and 1 separator completed) when it feeds with 3 elements (2 incompleted and 1 completed)", () => {
    // Arrange
    const initialSteps = [
      { text: "1", active: true, completed: true },
      { text: "2", active: false, completed: false },
      { text: "3", active: false, completed: false },
    ];
    // Act
    render(<Stepper steps={initialSteps} />);

    const completed = document.getElementsByClassName("step-completed").length;

    // Assert
    expect(completed).toBe(2);
  });

  it("should display (3 steps completed and 2 separator completed) when it feeds with 3 elements completed", () => {
    // Arrange
    const initialSteps = [
      { text: "1", active: true, completed: true },
      { text: "2", active: false, completed: true },
      { text: "3", active: false, completed: true },
    ];
    // Act
    render(<Stepper steps={initialSteps} />);

    const completed = document.getElementsByClassName("step-completed").length;

    // Assert
    expect(completed).toBe(5);
  });
});
