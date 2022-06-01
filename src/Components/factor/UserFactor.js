import React, { useEffect, useState } from "react";
import style from "./UserFactor.module.css";
import { useTranslation } from "react-i18next";
import UserAddres from "./UserAddres";
import FactorSection from "./FactorSection";
import BuyLists from "./buylist/BuyLists";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketDetails,
  getBasketUser,
  getuserAddress
} from "../../redux/factor/factorAction";
import { getProfile } from "../../redux/register/registerAction";
import callApi from "../../api/callApi";
import { BASE_URL, GET_BASKET_DETAILS } from "../../api/urls";
import Loader from "../../tools/loader/Loader";
const UserFactor = () => {
  const { t } = useTranslation();
  const basket = useSelector((state) => state.stateFactor);
  const dispatch = useDispatch();
  const [prelaod, setPreload] = useState(true);
  const [baskedatas, setBasketDatas] = useState(basket.details);
  const state = useSelector((state) => state.stateRegister);

  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  useEffect(() => {
    dispatch(getBasketDetails(state.basketid));
    dispatch(getuserAddress(state.userid));
  }, []);
  return (
    <section className={style.ContainerSection}>
      <div className="container mt-4">
        <FactorSection title={t("addres")} component={<UserAddres />} />
        {basket.loading ? (
          <Loader />
        ) : (
          <FactorSection
            title={t("paylist")}
            component={
              <BuyLists data={basket.details} setBasketDatas={setBasketDatas} />
            }
          />
        )}
      </div>
    </section>
  );
};

export default UserFactor;
