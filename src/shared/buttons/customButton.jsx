import React from "react";

import "../../styles/shared/buttons/customButton.scss";

export const CustomButton = ({
  color = "secondary",
  type,
  text,
  empty,
  disabled = false,
  onClick,
}) => {
  return (
    <>
      <button
        className={`customButton ${empty ? "empty" : ""} ${"color-" + color}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
