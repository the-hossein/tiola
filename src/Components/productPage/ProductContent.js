import React, { useEffect, useState } from "react";
import ColorPick from "../../tools/colorPick/ColorPick";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import ProductSlider from "../productSlider/ProductSlider";
import AllComment from "./comments/AllComment";
import style from "./Productpage.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import CircularProgress from "@mui/material/CircularProgress";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import PopUp from "../../tools/popup/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

//import thunk for save product
import {
  checkSavedItem,
  fetchingToSave
} from "../../redux/saveItem/saveItemAction";
import { notify } from "../../tools/toast/toast";

import { closePopUp, openPopUp } from "../../redux/register/registerAction";
import callApi from "../../api/callApi";
import { ADD_BASKET, BASE_URL } from "../../api/urls";
import { addQtyAmont } from "../../redux/factor/factorAction";
import Placement from "../../tools/placement/Placement";
import persianNumber from "../../tools/persianNumber/persianNumber";
const ProductContent = ({ product }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [preloadWatch, setpreloadWatch] = useState();
  const [preloadPay, setpreloadPay] = useState();

  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);

  const watchList = useSelector((state) => state.stateWatchList);
  const images = [];

  if (
    product.data !== null &&
    product.data.imageFile1 &&
    product.data.imageFile1.confirmed
  ) {
    images.push({ src: product.data.imageFile1.filePath, id: product.data.id });
  }
  if (
    product.data !== null &&
    product.data.imageFile2 &&
    product.data.imageFile2.confirmed
  ) {
    images.push({ src: product.data.imageFile2.filePath, id: product.data.id });
  }
  if (
    product.data !== null &&
    product.data.imageFile3 &&
    product.data.imageFile3.confirmed
  ) {
    images.push({ src: product.data.imageFile3.filePath, id: product.data.id });
  }
  if (
    product.data !== null &&
    product.data.imageFile4 &&
    product.data.imageFile4.confirmed
  ) {
    images.push({ src: product.data.imageFile4.filePath, id: product.data.id });
  }
  if (
    product.data !== null &&
    product.data.imageFile5 &&
    product.data.imageFile5.confirmed
  ) {
    images.push({ src: product.data.imageFile5.filePath, id: product.data.id });
  }
  if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
  }
  const payHandler = () => {
    if (!state.loginStatus) {
      dispatch(openPopUp());
    } else {
      setpreloadPay(true);
      const userToken = JSON.parse(ls);
      var phone = userToken.phone;
      var token = userToken.token;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userid: state.userid,
        title: product.data.title,
        phonenumber: `${phone}`,
        description: "string",
        qty: 1,
        amount: product.data.price,
        productid: product.data.id
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
          setpreloadPay(false);
        } else if (added[0].code === 201) {
          setpreloadPay(false);
          if (lang === "fa") {
            var text = " از این محصول به سبد خرید شما اضافه شد";
          } else {
            text = "Add this product successfully to basket";
          }
          notify(text, "success");
        } else if (added[0].code === 206) {
          setpreloadPay(false);
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
    }
  };
  const addWatchHandler = () => {
    setpreloadWatch(true);
    const userID = state.userid;
    const productId = product.data.id;
    const targetItem = !!watchList.list.find(
      (item) => item.productId === productId
    );
    if (targetItem) {
      notify("شما این محصول را قبلا اضافه کردین", "success");
      setpreloadWatch(false);
    } else {
      dispatch(fetchingToSave(userID, productId));
      setpreloadWatch(false);
    }
  };

  useEffect(() => {
    if (state.loginStatus && state.userid !== "") {
      const userID = state.userid;
      dispatch(checkSavedItem(userID));
    }
  }, []);

  return product.data !== null ? (
    <>
      <div className="row  m-0">
        <div className={`col-lg-4 col-xxl-5 col-12  ${style.productSlider}`}>
          <ProductSlider
            radius={0}
            mbItem={1.4}
            tbItem={2}
            slidesShow={1.4}
            images={images}
            arrowStatus={false}
            margin={20}
            heightImage={"82vh"}
          />
        </div>
        <div className={`col-lg-8 col-xxl-7 col-12 ${style.information} mt-5 `}>
          <div>
            <h1>{lang === "fa" ? product.data.title : product.data.titleEn}</h1>
            <div
              className={`w-100 d-flex justify-content-between ${style.info}`}
            >
              <div>
                <span className={style.price}>
                  {lang === "fa"
                    ? persianNumber(product.data.price) + " " + t("t")
                    : product.data.price + " " + t("t")}
                </span>

                <p className={style.content}>
                  <ReactReadMoreReadLess
                    charLimit={300}
                    readMoreText={t("Readmore")}
                    readLessText={t("Readless")}
                    readMoreClassName={style.readmore}
                    readLessClassName={style.readLess}
                  >
                    {product.data.description}
                  </ReactReadMoreReadLess>
                </p>
                <div>
                  <span className={style.compatible}>
                    {t("Compatiblewith")}
                  </span>
                  {product.data.compatibleColors.split(",").map((color) => (
                    <>
                      <ColorPick color={color} />
                    </>
                  ))}
                </div>
              </div>
              <div className={style.buttons}>
                <NormalBtn
                  color="red"
                  text={
                    preloadPay ? (
                      <CircularProgress size={20} disableShrink />
                    ) : (
                      t("pay")
                    )
                  }
                  onClick={(e) => payHandler()}
                />
                <NormalBtn
                  color="white"
                  text={
                    preloadWatch ? (
                      <CircularProgress size={20} disableShrink />
                    ) : (
                      t("addWatch")
                    )
                  }
                  onClick={(e) => addWatchHandler()}
                />
              </div>
            </div>
          </div>
            <AllComment product={product[0]} className="col" />
        </div>
      </div>
    </>
  ) : (
    <Placement text="محصول موجود نمی باشد" />
  );
};

export default ProductContent;
