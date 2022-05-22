import React from "react";
import { useTranslation } from "react-i18next";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";

const ProActions = () => {
  const { t } = useTranslation();
  const morePro = () => {};
  const addwatch = () => {};
  return (
    <div className="d-flex justify-content-between mt-4 mb-2">
      <PrimaryButton
        light={true}
        btnText={t("simpleViewMore")}
        onClick={morePro}
      />
      <PrimaryButton light={true} btnText={t("watchlist")} onClick={addwatch} />
    </div>
  );
};

export default ProActions;
