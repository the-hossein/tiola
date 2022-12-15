import Link from "next/link";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import React, {useEffect, useState } from "react";
// Import Swiper styles
import { useDispatch, useSelector } from "react-redux";

//import thunk for save product
import {
  checkSavedItem,
  fetchingToSave
} from "../../redux/saveItem/saveItemAction";
import { notify } from "../../tools/toast/toast";

const ProActions = ({id}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
 

  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

  const watchList = useSelector((state) => state.stateWatchList);
  const morePro = () => {};
  const addWatchHandler = () => {
    const userID = state.userid;
    const productId = id;
    const targetItem = !!watchList.list.find(
      (item) => item.productId === productId
    );
    if (targetItem) {
      let textShow ; 
      if(lang === 'fa'){
        textShow = 'شما این محصول را قبلا اضافه کرده اید.';
      }else {
        textShow = 'You have already added this product';
      }
      notify(textShow, "warning");
    } else {
      dispatch(fetchingToSave(userID, productId,lang));
    }
  };

  useEffect(() => {
    if (state.loginStatus && state.userid !== "") {
      const userID = state.userid;
      dispatch(checkSavedItem(userID, lang));
    }},[])
  return (
    <div className="d-flex justify-content-between mt-5 mb-3">
     <Link href={`/product/${id}`}>
   <a>
   <PrimaryButton
        light={true}
        btnText={t("simpleViewMore")}
        onClick={morePro}
      />
   </a>
     </Link>
      <PrimaryButton light={true} btnText={t("watchlist")} onClick={addWatchHandler} />
    </div>
  );
};

export default ProActions;
