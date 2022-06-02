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

const BuyLists = ({ setBasketDatas }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateFactor.details);
  const user = useSelector((state) => state.stateRegister);
  const [totalprice, settotalprice] = useState(0);
  const [preload, setpreload] = useState(true);
  const [preloadPay,setpreloadPay]=useState()
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }

  useEffect(() => {
    var Price = 0;
    for (var i = 0; i < state.length; i++) {
      Price = Price + state[i].qty * state[i].amount;
      console.log(Price);
    }
    settotalprice(Price);
    setpreload(false);
  }, [state]);

  const payHandler = () => {
    setpreloadPay(true)
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
        setpreloadPay(false)
        window.location = status[0].data.requestBank;

      }
    };
    apipayment();
  };

  return (
    <div>
      {state.length <= 0 ? (
        <Placement text={t("placementfactorList")} />
      ) : (
        <>
          {state.map((item) => (
            <>
              <List
                data={item}
                alldata={state}
                setBasketDatas={setBasketDatas}
              />
            </>
          ))}

          <div className={style.payBtn}>
            <NormalBtn
              color="red"
              text={preloadPay? <Spinner animation="border" variant="primary" />:t("pay")}
              onClick={(e) => payHandler()}
            />
            {preload === true ? (
              <Loader />
            ) : (
              <div>مجموع : {totalprice} تومان</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BuyLists;
