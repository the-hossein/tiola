import React, { useLayoutEffect, useState } from "react";
import ColorPick from "../../../tools/colorPick/ColorPick";
import { useTranslation } from "react-i18next";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import style from "./BuyList.module.css";
import PrimaryButton from "../../../tools/primaryButton/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import MbList from "./MbList";
import { useDispatch, useSelector } from "react-redux";
import callApi from "../../../api/callApi";
import {
  BASE_URL,
  DECREASE_QTY,
  DELETE_BASKET,
  INCREASE_QTY
} from "../../../api/urls";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteBasketUser } from "../../../redux/factor/factorAction";
import { notify } from "../../../tools/toast/toast";
const List = ({ data, alldata, setBasketDatas }) => {
  console.log(data);
  const dispatch = useDispatch();
  const [size, setSize] = useState([0]);
  const [qty, setQty] = useState(data.qty);
  const lang = useSelector((state) => state.stateLang.lng);
  const basket = useSelector((state) => state.stateFactor);
  const { t } = useTranslation();
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
    var userToken = JSON.parse(ls);
    var token = userToken.token;
  }

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const increaseHandler = () => {
    const increase = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const statusAdd = await callApi(
        `${BASE_URL + INCREASE_QTY}?BasketDetailId=${data.id}`,
        "{}",
        myHeaders,
        "POST"
      );
      if (statusAdd[0].code === 200) {
        setQty(qty + 1);
      } else if (statusAdd[0].code === 206) {
        if (lang === "fa") {
          var text = "موجودی کافی نیست ";
        } else {
          text = "Inventory is not enough";
        }
        notify(text, "error");
      }
    };
    increase();
  };
  const decreseHandler = () => {
    const decrease = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const statusDec = await callApi(
        `${BASE_URL + DECREASE_QTY}?BasketDetailId=${data.id}`,
        "{}",
        myHeaders,
        "POST"
      );
      if (statusDec[0].code === 200) {
        setQty(qty - 1);
      }
    };
    decrease();
  };
  const deleteHandler = () => {
    dispatch(deleteBasketUser(alldata, data));
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);
    // const deletProduct = async () => {
    //   const status = await callApi(
    //     `${BASE_URL + DELETE_BASKET}?BasketDetailId=${data.id}`,
    //     "{}",
    //     myHeaders,
    //     "POST"
    //   );
    //   if (status[0].code === 200) {
    //     const deletePro = alldata.filter((item) => item.id !== data.id);
    //     setBasketDatas(deletePro);
    //   }
    // };
    // deletProduct();
  };
  const addwatch = () => {};
  return size > 768 ? (
    <div className={`row m-0 p-3 justify-content-between w-100 ${style.row}`}>
      <>
        <ul>
          <li>{lang === "fa" ? data.title : data.titleEn}</li>
          {t("code") + data.productId}
          <li>
            {lang === "fa" ? data.collection.title : data.collection.titleEn}
          </li>
        </ul>
        <ColorPick color={data.collection.colorCode} />
        <div className="d-flex flex-row">
          {qty <= 1 ? (
            <DeleteIcon sx={{ fontSize: 24 }} onClick={deleteHandler} />
          ) : (
            <FontAwesomeIcon
              icon={faMinus}
              className={style.minus}
              onClick={decreseHandler}
            />
          )}
          <span className={style.count}>{qty}</span>
          <AddOutlinedIcon
            sx={{ fontSize: 30, margin: 0 }}
            onClick={increaseHandler}
          />
        </div>
        <img src={data.filePath} />
        <div>
          <CloseOutlinedIcon
            sx={{ fontSize: 24 }}
            className={style.close}
            onClick={deleteHandler}
          />
          <PrimaryButton
            light={true}
            btnText={t("addWatchList")}
            onClick={addwatch}
          />
        </div>
      </>
    </div>
  ) : (
    <MbList />
  );
};

export default List;
