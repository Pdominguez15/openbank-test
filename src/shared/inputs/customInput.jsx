import React from "react";
import { Field, ErrorMessage } from "formik";

export const CustomInput = ({
  name,
  label,
  type,
  placeholder,
  className,
  maxLength,
  imageSrc,
  imageAlt,
  onClickImg,
}) => {
  return (
    <>
      <div className="form-container-input">
        <label htmlFor={name}>{label}</label>
        <div className="form-input">
          <Field
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            maxLength={maxLength}
          />

          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              onClick={() => {
                onClickImg();
              }}
            />
          )}
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    </>
  );
};
