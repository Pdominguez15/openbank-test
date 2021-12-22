import React from "react";
import { useTranslation } from "react-i18next";

import "../../../../styles/views/passwordManager/components/result/result.scss";

import check from "../../../../assets/img/check.png";
import warning from "../../../../assets/img/warning.png";

import { CustomButton } from "../../../../shared/buttons/customButton";

export const Result = ({ isOk, onClick }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="result-container">
        <div>
          <div className="result-header">
            <div>
              <img
                src={isOk ? check : warning}
                alt={t(
                  `components.passwordManager.result.${
                    isOk ? "imageCheckAlt" : "imageWarmingAlt"
                  }`
                )}
              />
            </div>
            <h1>
              {t(
                `components.passwordManager.result.${
                  isOk ? "checkTitle" : "warmingTitle"
                }`
              )}
            </h1>
          </div>
          <p>
            {t(
              `components.passwordManager.result.${
                isOk ? "checkText" : "warmingText"
              }`
            )}
          </p>
        </div>

        <div className="footer">
          <CustomButton
            color="primary"
            type="button"
            text={
              isOk
                ? `${t("shared.buttons.access")} >`
                : `${t("shared.buttons.return", {
                    name: "Password Manager",
                  })} >`
            }
            empty
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};
