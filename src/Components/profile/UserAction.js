import React, { useState, useLayoutEffect, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";
import SecondlyButton from "../../tools/secondlyButton/SecondlyButton";
import RowProduct from "./RowProduct";
import style from "./UserProfile.module.css";
import { useRouter } from "next/dist/client/router";

//get state watch list
import { useDispatch, useSelector } from "react-redux";
import { checkSavedItem } from "../../redux/saveItem/saveItemAction";
import { fetchOrderHistory } from "../../redux/orderHistory/orderHistoryAction";
import Loader from "../../tools/loader/Loader";
import Placement from "../../tools/placement/Placement";

const UserAction = () => {
  const router = useRouter();
  const user = useSelector((state) => state.stateRegister);
  const watchList = useSelector((state) => state.stateWatchList);
  const orderHistory = useSelector((state) => state.stateHistory);
  const dispatch = useDispatch();

  const [historyRender, setHistoryRender] = useState(true);

  useEffect(() => {
    if (user.loginStatus) {
      const userId = user.userid;
      dispatch(checkSavedItem(userId));
      if (historyRender) {
        dispatch(fetchOrderHistory(userId));
        setHistoryRender(false);
      }
    }
  }, [user]);

  const { t } = useTranslation();

  const [showAllHistory, setShowAllHistory] = useState(false);
  const shortHistory = orderHistory.data.slice(0, 3);

  return (
    <div className="row justify-content-between mt-5 mb-5 ">
      <div
        className={`col-xl-5 col-lg-5 col-md-12  col-12 ${style.watchListDiv}`}
      >
        <h3 className={style.title}>{t("watchlist")}</h3>
        {
          // watchList.preload ?
          // <Loader/>
          //  :
          watchList.list.length === 0 ? (
            <Placement text={t("dontProfileList")} />
          ) : (
            watchList.list.map((item) => {
              return (
                <RowProduct
                  key={item.id}
                  statusText="pending"
                  close={true}
                  removeId={item.id}
                  data={item.product}
                  userId={user.userid}
                  loading={watchList.preload}
                />
              );
            })
          )
        }
      </div>
       <div className={`col-xl-5 col-lg-5 col-md-12 col-12 ${style.history}`}>
        <h3 className={style.title}>{t("history")}</h3>
        {orderHistory.loader ? (
          <Loader />
        ) : !orderHistory.data.length ? (
          <div className={style.messageExist}>
            <p>{t("dontHistory")}</p>
          </div>
        ) : (
          showAllHistory ? (orderHistory.data.map((item) => (
            <RowProduct
              key={item.id}
              close={false}
              removeId={item.id}
              data={item}
              userId={user.userid}
              loading={orderHistory.loader}
              statusText="completed"
            />
          ))):
          shortHistory.map((item) => (
            <RowProduct
              key={item.id}
              close={false}
              removeId={item.id}
              data={item}
              userId={user.userid}
              loading={orderHistory.loader}
              statusText="completed"
            />
          ))
        )}
        {
          orderHistory.data.length === true
           && <button onClick={() => setShowAllHistory(preveShow => !preveShow)}>{t("simpleViewMore")}</button>
        }
      </div> 
    </div>
  );
};

export default UserAction;
