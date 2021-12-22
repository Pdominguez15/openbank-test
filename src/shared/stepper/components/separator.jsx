import React from "react";

import "../../../styles/shared/stepper/stepper.scss";

export const Separator = ({ completed }) => {
  return (
    <>
      <div className={`stepper-separator ${completed && "step-completed"}`}>
        <span></span>
      </div>
    </>
  );
};
