import React from "react";
import XoGame from "../xogame/XoGame";
//stylesheet
import Link from "next/link";
import style from "./Error404.module.css";
import PopUp from "../popup/PopUp";
import { useSelector } from "react-redux";

const Error404 = () => {
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <div className={`${style.containerMain}`}>
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 col-lg-5">
            <div className="d-flex flex-column text-center justify-content-between align-items-center">
              <h1 className="col-12 mb-5">404</h1>
              <p className="col-12 mb-5">
                {lang === "fa"
                  ? "به نظر می رسد در یک پیچ و خم هستید"
                  : "Looks like you are in a maze"}
              </p>

              <p className="col-12 mb-5">
                {lang === "fa"
                  ? "از صفحه کلید برای کنترل توپ برای خروج از پیچ و خم به خانه استفاده کنید"
                  : "Use the keyboard to control the ball to maze exit return to the home"}
              </p>

              <Link href="/">
                <button className="col-12 text-center mb-t">
                  {lang === "fa" ? "رفتن به صفحه اصلی" : "  Go To Home Page"}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5">
            <XoGame />
            {/* <div className={style.game}>
                            <span className={style.ball}></span>
                        </div> */}
          </div>
        </div>
      </div>
      <PopUp />
    </div>
  );
};

export default Error404;
