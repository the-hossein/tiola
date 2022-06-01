import React, { useState, useLayoutEffect, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import SecondlyButton from "../../tools/secondlyButton/SecondlyButton";
import RowProduct from "./RowProduct";
import style from "./UserProfile.module.css";

//get state watch list
import { useDispatch, useSelector } from "react-redux";
import { checkSavedItem } from "../../redux/saveItem/saveItemAction";

const UserAction = () => {
  const user = useSelector(state => state.stateRegister);
  const watchList = useSelector(state=> state.stateWatchList);
  const dispatch = useDispatch();
  useEffect(()=> {
    if(user){
      const userId = user.userid;
      dispatch(checkSavedItem(userId));
    }
  }, [user])

  const { t } = useTranslation();
  return (
    <div className="row justify-content-between mt-5 mb-5 ">
      <div className="col-xl-5 col-lg-5 col-md-12  col-12">
        <h3 className={style.title}>Watch List</h3>
        {
          watchList.preload ? 
            <p>Loading....</p> 
            : watchList.list.map( item => {
              return <RowProduct key={item.id} statusText="pending" close={true} removeId={item.id} data= {item.product} userId={user.userid}/>
            })
        }
        
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
