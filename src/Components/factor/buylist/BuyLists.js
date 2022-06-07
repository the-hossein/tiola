import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NormalBtn from "../../../tools/normalBtn/NormalBtn";
import Placement from "../../../tools/placement/Placement";
import List from "./List";
import style from "./BuyList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../tools/loader/Loader";
import { addPayment } from "../../../redux/factor/factorAction";
import { ADD_PAYMENT, BASE_URL } from "../../../api/urls";
import callApi from "../../../api/callApi";
import Spinner from "react-bootstrap/Spinner";
import { notify } from "../../../tools/toast/toast";
import persianNumber from "../../../tools/persianNumber/persianNumber";

const BuyLists = ({ setBasketDatas }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

  const [totalprice, settotalprice] = useState(0);
  const [preload, setpreload] = useState(true);
  const [preloadPay, setpreloadPay] = useState();
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  useEffect(() => {
    var Price = 0;
    for (var i = 0; i < state.details.length; i++) {
      Price = Price + state.details[i].qty * state.details[i].amount;
      console.log(Price);
    }
    settotalprice(Price);
    setpreload(false);
  }, [state]);

  const payHandler = () => {
    if (user.loginStatus && user.birthDayDateTime !== null && ls) {
      console.log(user.birthDayDateTime);
      setpreloadPay(true);
      const userToken = JSON.parse(ls);
      const token = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        userid: user.userid,
        basketid: user.basketid,
        amount: totalprice,
        description: "string",
        bank: 1
      });
      console.log(raw);
      const apipayment = async () => {
        const status = await callApi(
          BASE_URL + ADD_PAYMENT,
          raw,
          myHeaders,
          "POST"
        );
        if (status[0].code === 200) {
          setpreloadPay(false);
          window.location = status[0].data.requestBank;
        } else {
          if (lang === "fa") {
            var text = "خطایی رخ داده";
          } else {
            var text = "An error occurred";
          }
          notify(text, "error");
          setpreloadPay(false);
        }
      };
      apipayment();
    } else {
      if (lang === "fa") {
        var text = "برای پرداخت ابتدا پروفایل خود را کامل کنید ";
      } else {
        text = "please complit profile data";
      }
      notify(text, "error");
    }
  };
  return state.deleteLoader ? (
    <Loader />
  ) : (
    <div>
      {state.details.length === 0 && state.details !== null ? (
        <Placement text={t("placementfactorList")} />
      ) : (
        <>
          {state.details.map((item) => (
            <>
              <List
                data={item}
                alldata={state.details}
                setBasketDatas={setBasketDatas}
              />
            </>
          ))}

          <div className={style.payBtn}>
            <NormalBtn
              color="red"
              text={
                preloadPay ? (
                  <Spinner animation="border" variant="primary" />
                ) : (
                  t("pay")
                )
              }
              onClick={(e) => payHandler()}
            />
            {preload === true ? (
              <Loader />
            ) : (
              <div>
                <span>{t("total")}</span>
                <span>
                  {lang === "fa" ? persianNumber(totalprice) : totalprice}
                </span>
                <span>{t("toman")}</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BuyLists;
