import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/views/passwordManager/passwordManager.scss";

import { submitForm } from "../../services/api";

import { Stepper } from "../../shared/stepper/stepper";

import { Information } from "./components/information/information";
import { FormPassword } from "./components/formPassword/formPassword";
import { Result } from "./components/result/result";

import { useSteps } from "./hooks/useSteps";

const initialSteps = [
  { text: "1", active: true, completed: false },
  { text: "2", active: false, completed: false },
  { text: "3", active: false, completed: false },
];

export const PasswordManager = () => {
  const { t } = useTranslation();

  const { steps, resetSteps, nextStep, activeStep } = useSteps(initialSteps);
  const [isOkSubmit, setIsOkSubmit] = useState(null);

  const handleClickNext = () => {
    nextStep();
  };

  const handleClickCancel = () => {
    resetSteps();
    setIsOkSubmit(null);
  };

  const handleSubmit = async (values) => {
    try {
      await submitForm(values.password, values.repeatedPassword, values.clue);

      setIsOkSubmit(true);
      handleClickNext();
    } catch (error) {
      setIsOkSubmit(false);
      handleClickNext();
    }
  };

  return (
    <>
      <Stepper steps={steps} />
      <main className="main-container">
        {isOkSubmit === null && (
          <div className="title">
            <h1>{t("components.passwordManager.title")}</h1>
          </div>
        )}
        {activeStep === 0 && (
          <Information
            onClickCancel={handleClickCancel}
            onClickNext={handleClickNext}
          />
        )}

        {activeStep === 1 && (
          <FormPassword
            onSubmit={handleSubmit}
            onClickCancel={handleClickCancel}
          />
        )}

        {activeStep === 2 && (
          <Result isOk={isOkSubmit} onClick={handleClickCancel} />
        )}
      </main>
    </>
  );
};
