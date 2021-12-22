import React from "react";

import "../../styles/shared/stepper/stepper.scss";

import { Separator } from "./components/separator";
import { Step } from "./components/step";

export const Stepper = ({ steps }) => {
  return (
    <>
      <div className="stepper-container">
        {steps.map((step, index) => {
          return (
            <React.Fragment key={index}>
              <Step step={step} />
              {index + 1 !== steps.length && (
                <Separator completed={step.completed} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
