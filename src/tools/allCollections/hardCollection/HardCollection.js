import React from "react";
import Link from "next/link";
import style from "./HardCollection.module.css";
import ViewAll from "../../viewAll/ViewAll";
import { useTranslation } from "react-i18next";
const HardCollection = ({ image, title, content }) => {
  const { t } = useTranslation()
  return (
    <>
      <Link href="/explore">
        <div
          className={`row justify-content-center flex-row-reverse mt-5 mb-5 pb-3 ${style.collection}`}
        >
          <div
            className={` col-xl-4 col-lg-5 col-md-6 col-12 text-center d-flex justify-content-center p-0  pt-4  pb-4 ${style.collectionImage}`}
          >
            <div className="d-flex justify-content-center ">
              <div className={`${style.tileImage} position-relative`}>
                <img src={image} />
                <div id={style.line2}></div>
                <div id={style.line3}></div>
                <div id={style.line1}></div>
                <div id={style.line4}></div>
                <div id={style.line5}></div>
                <div id={style.line6}></div>
                <div id={style.line7}></div>
                <div id={style.line8}></div>
                <div id={style.line9}></div>
                <div id={style.line10}></div>
                <div id={style.line11}></div>
                <div id={style.line12}></div>
                <div id={style.line13}></div>
                <div id={style.line14}></div>
                <div id={style.line15}></div>
                <div id={style.line16}></div>
                <div id={style.line17}></div>
                <div id={style.line18}></div>
                <div id={style.line19}></div>
                <div id={style.line20}></div>
                <div id={style.line21}></div>
                <div id={style.line22}></div>
                <div id={style.line23}></div>
                <div id={style.line24}></div>
                <div id={style.line25}></div>
              </div>
            </div>
          </div>
          <div
            className={` col-xl-6 col-lg-7 col-md-6 col-12 position-relative d-flex flex-column pb-4 justify-content-between ${style.content}`}
          >
            <div>
              <h3 className={style.collectionTitile}>{title}</h3>
              <p className="lh-lg">{content}</p>
            </div>
          <ViewAll content={t("btnExploreLand")} linked={'/explore'} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default HardCollection;
