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
import { useRouter } from "next/router";

import Placement from "../../tools/placement/Placement";
import Delivery from "./Delivery";
const UserFactor = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const state = useSelector((state) => state.stateRegister);
  const basket = useSelector((state) => state.stateFactor);
  const dispatch = useDispatch();
  const [prelaod, setPreload] = useState(true);
  const [baskedatas, setBasketDatas] = useState();
  const [post, setPost] = useState("pishtaz");
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
      setBasketDatas(basket.details);
      setPreload(false);
    }
  }, [state]);
  return (
    <section className={style.ContainerSection}>
      {!!basket ? (
        basket.details === null ? (
          <Placement text={t("exitAccount")} />
        ) : (
          <div className="container mt-4">
            <FactorSection title={t("addres")} component={<UserAddres />} />
            <FactorSection
              title={t("deliveryFactor")}
              component={<Delivery setPost={setPost} post={post} />}
            />
            <FactorSection
              title={t("paylist")}
              component={
                prelaod ? null : (
                  <BuyLists
                    data={baskedatas}
                    post={post}
                    setBasketDatas={setBasketDatas}
                  />
                )
              }
            />
          </div>
        )
      ) : (
        <Placement text={t("failedfactor")} />
      )}
    </section>
  );
};

export default UserFactor;
