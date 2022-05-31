import React, { useEffect } from "react";
import style from "./UserFactor.module.css";
import { useTranslation } from "react-i18next";
import UserAddres from "./UserAddres";
import FactorSection from "./FactorSection";
import BuyLists from "./buylist/BuyLists";
import { useDispatch, useSelector } from "react-redux";
import { getBasketUser } from "../../redux/factor/factorAction";
import { getProfile } from "../../redux/register/registerAction";
const UserFactor = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateRegister);
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }


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
