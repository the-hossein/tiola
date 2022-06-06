import Link from "next/link";
import React from "react";
import Image from "next/image";
import style from "./StatusPayment.module.css";
import erroPic from "../../../public/Assets/images/errorPic.jpg";
import successPIc from "../../../public/Assets/images/successPic.jpg";
import Alert from "react-bootstrap/Alert";
const StatusPayment = ({ statusCode, type }) => {
  console.log(statusCode);
  const textError = "";
  switch (statusCode) {
    case 200:
      textError = "پرداخت با موفقیت انجام شد.";
      break;
    case 400:
      textError = "استعلام نتیجه ای نداشت.";
      break;
    case 401:
      textError = "اعتبار سنجی وب سرویس ناموفق بود.";
    case 403:
      textError = "خطا رخ داده است";
    case 404:
      textError = "وب سریس یافت نشد.";
    case 405:
      textError = "پرداخت تایید نشد.";
    case "catch":
      textError = "خطا در پرداخت";
    default:
      textError = "پرداخت انجام نشد";
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
              <button className={style.backindex}>بازگشت به صفحه اصلی</button>
            </Link>
          {
              statusCode>206&&
              <Link href="/factor">
              <button className={style.backindex}>بازگشت به فاکتور</button>
            </Link>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPayment;
