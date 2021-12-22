import React from "react";

import "../../../styles/shared/stepper/stepper.scss";

export const Step = ({ step }) => {
  return (
    <>
      <div
        className={`stepper-step ${step.active && "step-active"} ${
          step.completed && "step-completed"
        }`}
      >
        <span>{step.completed ? "✓" : step.text}</span>
        {step.active && <div className="step-marker"></div>}
      </div>
    </>
  );
};
