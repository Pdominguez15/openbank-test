import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../../../../styles/views/passwordManager/components/formPassword/formPassword.scss";

import eye from "../../../../assets/img/eye.png";
import closedEye from "../../../../assets/img/close-eye.png";

import { CustomButton } from "../../../../shared/buttons/customButton";
import { CustomInput } from "../../../../shared/inputs/customInput";

export const FormPassword = ({ onSubmit, onClickCancel }) => {
  const { t } = useTranslation();

  const [eyePassword, setEyePassword] = useState(eye);
  const [eyeRepeatPassword, setEyeRepeatPassword] = useState(eye);

  const handleClickEye = (type, callback) => {
    if (type === eye) {
      callback(closedEye);
    } else {
      callback(eye);
    }
  };

  const getTypeInput = (state) => {
    if (state === eye) {
      return "password";
    } else {
      return "text";
    }
  };

  const getNumberOfLetters = (value) => {
    return value.split("").length;
  };

  return (
    <>
      <div className="form-container">
        <Formik
          initialValues={{ password: "", repeatedPassword: "", clue: "" }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .required(`${t("shared.validations.password.required")}`)
              .min(
                8,
                `${t("shared.validations.password.min", { number: "8" })}`
              )
              .matches(
                /(?=.*[0-9])(?=\w*[A-Z])/,
                `${t("shared.validations.password.regex")}`
              ),
            repeatedPassword: Yup.string()
              .oneOf(
                [Yup.ref("password"), null],
                `${t("shared.validations.password.match")}`
              )
              .required(`${t("shared.validations.password.repeatRequired")}`),
          })}
        >
          {({ errors, status, touched, values }) => (
            <Form>
              <div className="form-password-container">
                <p>{t("components.passwordManager.formPassword.text1")}</p>
                <p>{t("components.passwordManager.formPassword.text2")}</p>
                <div className="form-create-password">
                  <CustomInput
                    name="password"
                    label={t(
                      "components.passwordManager.formPassword.passwordLabel"
                    )}
                    type={getTypeInput(eyePassword)}
                    placeholder={t(
                      "components.passwordManager.formPassword.passwordPlaceholder"
                    )}
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                    imageSrc={eyePassword}
                    imageAlt={t(
                      "components.passwordManager.formPassword.imageEyeAlt"
                    )}
                    onClickImg={() => {
                      handleClickEye(eyePassword, setEyePassword);
                    }}
                  />

                  <CustomInput
                    name="repeatedPassword"
                    label={t(
                      "components.passwordManager.formPassword.repeatPasswordLabel"
                    )}
                    type={getTypeInput(eyeRepeatPassword)}
                    placeholder={t(
                      "components.passwordManager.formPassword.repeatPasswordPlaceholder"
                    )}
                    className={
                      "form-control" +
                      (errors.repeatedPassword && touched.repeatedPassword
                        ? " is-invalid"
                        : "")
                    }
                    imageSrc={eyeRepeatPassword}
                    imageAlt={t(
                      "components.passwordManager.formPassword.imageEyeAlt"
                    )}
                    onClickImg={() => {
                      handleClickEye(eyeRepeatPassword, setEyeRepeatPassword);
                    }}
                  />
                </div>
              </div>
              <div className="form-clue-container">
                <p>{t("components.passwordManager.formPassword.clueText")}</p>
                <CustomInput
                  name="clue"
                  label={t("components.passwordManager.formPassword.clueLabel")}
                  type="text"
                  placeholder={t(
                    "components.passwordManager.formPassword.cluePlaceholder"
                  )}
                  className={"form-control"}
                  maxLength="60"
                />

                <span>{getNumberOfLetters(values.clue)}/60</span>
              </div>
              <div className="footer">
                <CustomButton
                  type="button"
                  text={`
                  ${t("shared.buttons.cancel")}`}
                  empty
                  onClick={onClickCancel}
                />
                <CustomButton
                  type="submit"
                  text={`
            ${t("shared.buttons.next")} >`}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
