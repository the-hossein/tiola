import React, { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import SecondlyButton from "../../tools/secondlyButton/SecondlyButton";
import RowProduct from "./RowProduct";
import style from "./UserProfile.module.css";
const UserAction = () => {

  const { t } = useTranslation();
  return (
    <div className="row justify-content-between mt-5 mb-5 ">
      <div className="col-xl-5 col-lg-5 col-md-12  col-12">
        <h3 className={style.title}>Watch List</h3>
        <RowProduct statusText="pending" close={true}/>
        <RowProduct statusText="pending" close={true}/>
        <RowProduct statusText="pending" close={true}/>
        <RowProduct statusText="pending" close={true}/>
        <RowProduct statusText="pending" close={true}/>

      </div>
      <div className={`col-xl-5 col-lg-5 col-md-12 col-12 ${style.history}`}>
        <h3 className={style.title}>History</h3>
        <RowProduct statusText="completed" />
        <RowProduct statusText="completed" />
        <RowProduct statusText="completed" />
        <SecondlyButton text={t("viewMore")} onClick={() => {}} />
      </div>
    </div>
  );
};

export default UserAction;
