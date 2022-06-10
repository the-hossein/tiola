import Link from "next/link";
import React from "react";
import Image from "next/image";
import style from "./StatusPayment.module.css";
import erroPic from "../../../public/Assets/images/errorPic.jpg";
import successPIc from "../../../public/Assets/images/successPic.jpg";
import Alert from "react-bootstrap/Alert";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getBasketDetails } from "../../redux/factor/factorAction";
const StatusPayment = ({ statusCode, type }) => {
  console.log(statusCode);
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateRegister);
  const goHomeHandler = () => {
    console.log(state.basketid);
    dispatch(getBasketDetails(state.basketid));
  };
  const textError = "";
  switch (statusCode) {
    case 200:
      if (lang === "fa") {
        textError = "پرداخت با موفقیت انجام شد.";
      } else {
        textError = "Payment was successful.";
      }
      break;
    case 400:
      if (lang === "fa") {
        textError = "استعلام نتیجه ای نداشت.";
      } else {
        textError = "Inquiry had no result.";
      }
      break;
    case 401:
      if (lang === "fa") {
        textError = "اعتبار سنجی وب سرویس ناموفق بود.";
      } else {
        textError = "Web service validation failed.";
      }
      break;
    case 403:
      if (lang === "fa") {
        textError = "خطا رخ داده است";
      } else {
        textError = "An error has occurred";
      }
      break;
    case 404:
      if (lang === "fa") {
        textError = "وب سریس یافت نشد.";
      } else {
        textError = "Web service not found.";
      }
      break;
    case 405:
      if (lang === "fa") {
        textError = "پرداخت تایید نشد.";
      } else if (lang === "en") {
        textError = "Payment not confirmed.";
      }
      break;
    case "catch":
      if (lang === "fa") {
        textError = "خطا در پرداخت";
      } else {
        textError = "Payment error";
      }
      break;
    default:
      if (lang === "fa") {
        textError = "پرداخت انجام نشد";
      } else {
        textError = "Payment failed";
      }
      break;
  }
  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-lg-6 col-md-7 col-12 mt-5 mb-5">
          <div className={`colStyle ${style.container}`}>
            {statusCode < 206 ? (
              //     <div className="alert alert-danger mt-5">
              //     <strong> {textError} </strong>
              //   </div>
              <Alert key={"success"} variant={"success"}>
                <strong> {textError} </strong>
              </Alert>
            ) : (
              <Alert key={"danger"} variant={"danger"}>
                <strong> {textError} </strong>
              </Alert>
            )}
            {type === "success" ? (
              <Image src={successPIc} />
            ) : (
              <Image src={erroPic} />
            )}

            <Link href="/">
              <button className={style.backindex} onClick={goHomeHandler}>
                {t("goHome")}
              </button>
            </Link>
            {statusCode > 206 && (
              <Link href="/factor">
                <button className={style.backindex}>{t("goFactor")} </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPayment;
