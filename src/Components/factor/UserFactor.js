import React from "react";
import style from "./UserFactor.module.css";
import { useTranslation } from "react-i18next";
import UserAddres from "./UserAddres";
import FactorSection from "./FactorSection";
import BuyLists from "./buylist/BuyLists";
const UserFactor = () => {
  const { t } = useTranslation();

  return (
    <section className={style.ContainerSection}>
      <div className="container mt-4">
        <FactorSection title={t("addres")} component={<UserAddres />} />
        <FactorSection title={t("paylist")} component={<BuyLists />} />

        
      </div>
    </section>
  );
};

export default UserFactor;
