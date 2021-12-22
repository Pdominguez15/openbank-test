import React from "react";
import { useTranslation } from "react-i18next";

import "../../../../styles/views/passwordManager/components/information/information.scss";

import img1 from "../../../../assets/img/group.svg";
import img2 from "../../../../assets/img/group-3.svg";

import { CustomButton } from "../../../../shared/buttons/customButton";

export const Information = ({ onClickNext }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="information-container">
        <div className="information-images-container">
          <div className="info">
            <div>
              <img
                src={img1}
                alt={t("components.passwordManager.information.imageAlt1")}
              />
            </div>
            <p>{t("components.passwordManager.information.imageText1")}</p>
          </div>
          <div className="info">
            <div>
              <img
                src={img2}
                alt={t("components.passwordManager.information.imageAlt2")}
              />
            </div>
            <p>{t("components.passwordManager.information.imageText2")}</p>
          </div>
        </div>

        <div>
          <h2>
            {t("components.passwordManager.information.howFuctionTitle")}{" "}
          </h2>
          <p>{t("components.passwordManager.information.howFuctionText")}</p>
        </div>

        <div>
          <h2>{t("components.passwordManager.information.dataToSaveTitle")}</h2>
          <p>{t("components.passwordManager.information.dataToSaveText")}</p>
        </div>

        <div className="footer">
          <CustomButton
            type="button"
            text={`
            ${t("shared.buttons.next")} >`}
            onClick={onClickNext}
          />
        </div>
      </div>
    </>
  );
};
