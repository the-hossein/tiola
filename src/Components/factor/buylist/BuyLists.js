import React from "react";
import { useTranslation } from "react-i18next";
import NormalBtn from "../../../tools/normalBtn/NormalBtn";
import Placement from "../../../tools/placement/Placement";
import List from "./List";
import style from "./BuyList.module.css";
import { useSelector } from "react-redux";
import Loader from "../../../tools/loader/Loader";
const payHandler = () => {};

const BuyLists = ({ data, setBasketDatas }) => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateFactor);
  return (
    <div>
      {data.map((item) => (
        <>
          <List data={item} alldata={data} setBasketDatas={setBasketDatas} />
        </>
      ))}
      {data.length <= 0 ? (
        <Placement text={t("placementfactorList")} />
      ) : (
        <div className={style.payBtn}>
          <NormalBtn
            color="red"
            text={t("pay")}
            onClick={(e) => payHandler()}
          />
          <div>مجموع : 50000 تومان</div>
        </div>
      )}
    </div>
  );
};

export default BuyLists;
