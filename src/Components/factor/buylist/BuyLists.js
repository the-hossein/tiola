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
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import SquareIcon from "@mui/icons-material/Square";
import Rule from "./Rule";
const BuyLists = ({ setBasketDatas, post }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);
  const [faQ, setFaQ] = useState(false);
  const [openRule, setOpenRule] = useState(false);
  const [totalprice, settotalprice] = useState(0);
  const [preload, setpreload] = useState(true);
  const [preloadPay, setpreloadPay] = useState();
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  console.log(state);
  useEffect(() => {
    var Price = 0;
    for (var i = 0; i < state.details.length; i++) {
      Price = Price + state.details[i].qty * state.details[i].amount;
    }
    settotalprice(Price);
    setpreload(false);
  }, [state]);

  const payHandler = () => {
    if (user.loginStatus && user.birthDayDateTime !== null && ls) {
      setpreloadPay(true);
      const userToken = JSON.parse(ls);
      const token = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        userid: user.userid,
        basketid: user.basketid,
        amount:
          post === "pishtaz" ? (totalprice + 30000) * 10 : totalprice * 10,
        description: "string",
        bank: 1,
        shiping: post === "pishtaz" ? 0 : 1
      });
      const apipayment = async () => {
      console.log(raw)
        const status = await callApi(
          BASE_URL + ADD_PAYMENT,
          raw,
          myHeaders,
          "POST"
        );
        if (status[0].code === 200) {
          window.location = status[0].data.requestBank;
          setpreloadPay(false);
        } else if (status[0].code === 285) {
          if (lang === "fa") {
            var text = "آدرس خود را وارد کنید";
          } else {
            var text = "Enter your Addres";
          }
          notify(text, "error");
          setpreloadPay(false);
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
          <FormGroup
            sx={{ alignContent: "center", color: "var(--red-pen)" }}
            className={style.checkFaq}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setFaQ(!faQ)}
                  icon={<SquareIcon sx={{ color: "var(--light-pen)" }} />}
                  checked={faQ === true ? true : false}
                />
              }
            />
            <span onClick={() => setOpenRule(true)}>{t("allowFaq")}</span>
          </FormGroup>
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
              disable={faQ ? false : true}
            />
            {preload === true ? (
              <Loader />
            ) : (
              <div>
                <span>{t("total")}</span>
                <span>
                  {lang === "fa"
                    ? post === "pishtaz"
                      ? persianNumber(totalprice + 30000)
                      : persianNumber(totalprice)
                    : post === "pishtaz"
                    ? totalprice + 30000
                    : totalprice}
                </span>
                <span>{t("toman")}</span>
              </div>
            )}
          </div>
        </>
      )}
      {openRule && (
        <Rule openRule={openRule} setopenRule={setOpenRule} setFaQ={setFaQ} />
      )}
    </div>
  );
};

export default BuyLists;
