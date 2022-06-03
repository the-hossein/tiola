import React from "react";
import style from "./UserProfile.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/saveItem/saveItemAction";
import { useRouter } from "next/router";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import callApi from "../../api/callApi";
import { ADD_BASKET, BASE_URL } from "../../api/urls";
import { addQtyAmont } from "../../redux/factor/factorAction";
import { notify } from "../../tools/toast/toast";

const RowProduct = ({ close, statusText, data, userId, removeId, onclick }) => {
  const lang = useSelector((state) => state.stateLang.lng);
  const dateC =data ?  data.createdDatetime.split("T") : '';
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const test = () => {
    dispatch(removeItem(removeId, userId));
  }

  const navigate = () => {
    if(close){
      router.push({pathname: `/product/${data.id}`})
    }
  }
  const payHandler = () => {
    const ls = window.localStorage.getItem("userToken");
      const userToken = JSON.parse(ls);
      var phone = userToken.phone;
      var token = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userid: userId,
        title: data.title,
        phonenumber: `${phone}`,
        description: "string",
        qty: 1,
        amount: data.price,
        productid: data.id
      });

      console.log(raw);
      const addbasket = async () => {
        const added = await callApi(
          BASE_URL + ADD_BASKET,
          raw,
          myHeaders,
          "POST"
        );
        if (added[0].code === 200) {
          dispatch(addQtyAmont());
          if (lang === "fa") {
            var text = " محصول با موفقیت به سبد خرید شما اضافه شد";
          } else {
            text = "Add product successfully to basket";
          }
          notify(text, "success");
        } else if (added[0].code === 201) {
          if (lang === "fa") {
            var text = " از این محصول به سبد خرید شما اضافه شد";
          } else {
            text = "Add this product successfully to basket";
          }
          notify(text, "success");
        } else if (added[0].code === 206) {
          if (lang === "fa") {
            var text =
              "از این محصول به تعداد درخواستی شما در انبار موجود نمی باشد";
          } else {
            text = "This product is not available in stock as requested by you";
          }
          notify(text, "error");
        }
      };
      addbasket();
    
  };

  return (
    <>
       
        <div className={style.RowProduct}>
        {close && (
          <CloseIcon
            sx={{ color: "#707070", fontSize: 18, cursor: "pointer" }}
            className={style.close}
            onClick={test}
          />
        )}
          <div className={` d-flex `}>
            {/* {t("scarf")}  t("mirdamad") */}
            <span onClick={navigate} > {data ? data.title : "nonono"}</span>
            <span>{data ? dateC[0] : "kd"}</span>
            <span>{data ? data.collection.title : "mirdamad"}</span>
          </div>
          <div className={style.status}>
            <span>
              {close ? `موجودی: ${data.stock}` : t("pending")}
            </span>
            {
              close ? <AddCircleIcon 
                        sx={{ cursor: "pointer" }}
                        onClick={(e) => payHandler()}
                      />
              :statusText === "completed" ? (
              <CheckCircleOutlineIcon sx={{ color: "#8ABA70", fontSize: 30 }} />
            ) : (
              <AccessTimeIcon sx={{ color: "#b7b7b7", fontSize: 30 }} />
            )}
          </div>
        </div>
    </>
  );
};

export default RowProduct;
