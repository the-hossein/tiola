import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NormalBtn from "../../../tools/normalBtn/NormalBtn";
import Placement from "../../../tools/placement/Placement";
import List from "./List";
import style from "./BuyList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../tools/loader/Loader";
import { addPayment } from "../../../redux/factor/factorAction";
import {
  ADD_PAYMENT,
  BASE_URL,
  FREE_PAYMENT,
  OFF_CODE
} from "../../../api/urls";
import callApi from "../../../api/callApi";
import Spinner from "react-bootstrap/Spinner";
import { useRouter } from "next/router";
import { notify } from "../../../tools/toast/toast";
import persianNumber from "../../../tools/persianNumber/persianNumber";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";

import SquareIcon from "@mui/icons-material/Square";
import Rule from "./Rule";
import Input from "../../../tools/input/Input";

function tallyNumbers(tally, currentTotal) {
  return tally + currentTotal;
}

const BuyLists = ({ setBasketDatas, post }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateFactor);
  const user = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);
  const [faQ, setFaQ] = useState(false);
  const [pishtazPrice, setPishtazPrice] = useState(0);
  const [disOff, setDisOff] = useState(false);
  const [openRule, setOpenRule] = useState(false);
  const [totalprice, settotalprice] = useState(0);
  const [preload, setpreload] = useState(true);
  const [preloadPay, setpreloadPay] = useState();
  const [offCodeLoader, setoffCodeLoader] = useState(false);
  const [offcodeid, setOffcodeid] = useState();
  const [offCode, setOffCode] = useState();
  const [isFreePost, setIsFreePost] = useState(false);
  const [amountOff, setAmoutOff] = useState();
  const [percent, setPercent] = useState(0);
  const [allQtyBasket, setAllQtyBasket] = useState(0);
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  useEffect(() => {
    const allqty = state.details.map((item) => item.qty);
    var redQty = allqty.reduce(tallyNumbers, 0);
    setAllQtyBasket(redQty);
    var Price = 0;
    for (var i = 0; i < state.details.length; i++) {
      Price = Price + state.details[i].qty * state.details[i].amount;
    }
    if (isFreePost === false) {
      if (post === "pishtaz") {
        settotalprice(Price + pishtazPrice);
      } else {
        settotalprice(Price);
      }
    } else {
      settotalprice(Price);
    }
    setpreload(false);
    if (offCode && disOff === true) {
      if (percent === 0) {
        if (Price - amountOff <= 0) {
          settotalprice(0);
        } else {
          if (post === "pishtaz") {
            settotalprice(Price - amountOff + pishtazPrice);
          } else {
            settotalprice(Price - amountOff);
          }
        }
      } else {
        settotalprice(Price - (Price * percent) / 100);
      }
    }
  }, [state, post]);

  const payHandler = () => {
    if (user.loginStatus && ls) {
      if (state.allAddress.length === 0) {
        if (lang === "fa") {
          var text = "لطفا آدرس خود را ثبت کنید";
        } else {
          text = "please complit profile data";
        }
        setpreloadPay(false);

        notify(text, "error");
      } else {
        setpreloadPay(true);
        const userToken = JSON.parse(ls);
        const token = userToken.token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
          userid: user.userid,
          basketid: user.basketid,
          amount: post === "pishtaz" ? totalprice * 10 : totalprice * 10,
          description: disOff ? "Free Payment" : "peyment",
          bank: 1,
          shiping: post === "pishtaz" ? 0 : 1
        });
        var rawOff = JSON.stringify({
          userid: user.userid,
          basketid: user.basketid,
          amount: post === "pishtaz" ? totalprice * 10 : totalprice * 10,
          description: disOff ? "Free Payment" : "peyment",
          bank: 1,
          offcodeid: offcodeid,
          shiping: post === "pishtaz" ? 0 : 1
        });
        console.log(totalprice);
        if (totalprice !== 0) {
          const apipayment = async () => {
            const status = await callApi(
              BASE_URL + ADD_PAYMENT,
              disOff === true ? rawOff : raw,
              myHeaders,
              "POST"
            );
            if (status[0].code === 200) {
              console.log(disOff === true ? rawOff : raw);
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
          console.log(rawOff);
          const freePyamentUser = async () => {
            const freeStatus = await callApi(
              BASE_URL + FREE_PAYMENT,
              rawOff,
              myHeaders,
              "POST"
            );
            console.log(freeStatus[0].code);
            if (freeStatus[0].code === 200) {
              setpreloadPay(false);
              console.log(freeStatus[0].data.id);
              router.push({
                pathname: "paymentstatus",
                query: { orderid: freeStatus[0].data.id }
              });
            } else if (freeStatus[0].code === 285) {
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
          freePyamentUser();
        }
      }
    } else {
      if (lang === "fa") {
        var text = "برای پرداخت ابتدا پروفایل خود را کامل کنید ";
      } else {
        text = "please complit profile data";
      }
      notify(text, "error");
    }
  };
  const EnterCodehandler = (e) => {
    setOffCode(e.target.value);
    console.log(offCode);
  };
  const offHandler = () => {
    setoffCodeLoader(true);
    const offCodeApi = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const offStatus = await callApi(
        `${BASE_URL + OFF_CODE}?Code=${offCode}`,
        "{}",
        myHeaders,
        "GET"
      );
      if (offStatus[0].code === 200) {
        console.log(offStatus[0].data);
        if (offStatus[0].data.minQty <= allQtyBasket) {
          if (offStatus[0].data.freePost) {
            setIsFreePost(true);
            setPishtazPrice(0);
          }

          setOffcodeid(offStatus[0].data.id);
          if (offStatus[0].data.percent === 0) {
            setAmoutOff(offStatus[0].data.price);
            let diff;
            if (post === "pishtaz") {
              let newPrice = totalprice - pishtazPrice;
              diff = newPrice - offStatus[0].data.price;
            } else {
              diff = totalprice - offStatus[0].data.price;
            }
            if (diff <= 0) {
              settotalprice(0);
            } else {
              settotalprice(diff);
            }
          } else {
            setPercent(offStatus[0].data.percent);
            if (post === "pishtaz") {
              let newPrice = totalprice - pishtazPrice;
              const diff =
                newPrice - (newPrice * offStatus[0].data.percent) / 100;
              settotalprice(diff);
            } else {
              const diff =
                totalprice - (totalprice * offStatus[0].data.percent) / 100;
              settotalprice(diff);
            }
          }
          notify(t("offCodeTrue"), "success");
          setDisOff(true);
        } else {
          notify(t("QTYError"), "warning");
        }
        setoffCodeLoader(false);
      } else {
        notify(t("offCodeFalse"), "error");
        setoffCodeLoader(false);
      }
    };
    offCodeApi();
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

          <div className={style.factorAction}>
            <div className={style.offCode}>
              <div className={style.enterCode}>
                <Input
                  type="text"
                  placeholder={t("offCodePlaceHolder")}
                  changehandler={EnterCodehandler}
                  name="offCode"
                  value={disOff ? t("acceptCode") : offCode}
                  AutoFocus={true}
                  disabled={disOff ? true : false}
                />
                <button onClick={offHandler} disabled={disOff ? true : false}>
                  {offCodeLoader ? (
                    <CircularProgress size={15} disableShrink color="inherit" />
                  ) : (
                    t("submit")
                  )}
                </button>
              </div>
            </div>
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
                    <CircularProgress size={20} disableShrink />
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
                    {lang === "fa" ? persianNumber(totalprice) : totalprice}
                  </span>
                  <span>{t("toman")}</span>
                </div>
              )}
            </div>
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
