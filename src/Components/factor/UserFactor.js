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
import ScreenLoader from "../../tools/screenLoader/ScreenLoader";
import { notify } from "../../tools/toast/toast";
import Placement from "../../tools/placement/Placement";
const UserFactor = () => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateFactor);
  const dispatch = useDispatch();
  const [prelaod, setPreload] = useState(true);
  const [baskedatas, setBasketDatas] = useState();

  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  useEffect(() => {
    if (!!state.userid) {
      dispatch(getuserAddress(state.userid));
      if (state.basketid) {
        dispatch(getBasketDetails(state.basketid));
      }
    }
    if (!!basket) {
      console.log(basket.details);
      setBasketDatas(basket.details);
      setPreload(false);
    }
  }, [state]);
  console.log(basket.allAddress)
  return (
    <section className={style.ContainerSection}>
      <div className="container mt-4">
        <>
          {basket.details === "failed" ? (
            <Placement text={t("failedfactor")} />
            
          ) : (
            <>
              <FactorSection title={t("addres")} component={<UserAddres />} />

              <FactorSection
                title={t("paylist")}
                component={
                  prelaod ? null : (
                    <BuyLists
                      data={baskedatas}
                      setBasketDatas={setBasketDatas}
                    />
                  )
                }
              />
            </>
          )}
        </>
      </div>
    </section>
  );
};

export default UserFactor;
