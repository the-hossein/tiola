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
          <div className="col-12 col-md-5 col-lg-5 mb-5">
            <div className={style.textBox}>
              <h1 className="">404</h1>
              <p className="">
                {lang === "fa"
                  ? "صحفه مورد نظر یافت نشد"
                  : "The requested page could not be found"}
              </p>

              <p className={style.infoInErr}>
                {lang === "fa"
                  ? "برات سوپرایز داریم میتونی اینجا بمونی و بازی کنی یا بری صحفه اصلی"
                  : "We have a surprise for you, you can stay here and play or go to the main page"}
              </p>

              <Link href="/">
                <button className="">
                  {lang === "fa" ? "رفتن به صفحه اصلی" : "  Go To Home Page"}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 mb-5">
            <XoGame />
          </div>
        </div>
      </div>
      <PopUp />
    </div>
  );
};

export default Error404;
