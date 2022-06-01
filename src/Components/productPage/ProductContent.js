import React, { useState } from "react";
import ColorPick from "../../tools/colorPick/ColorPick";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import ProductSlider from "../productSlider/ProductSlider";
import AllComment from "./comments/AllComment";
import style from "./Productpage.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import PopUp from "../../tools/popup/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { closePopUp } from "../../redux/register/registerAction";
const ProductContent = ({ product }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state.stateRegister);
  const lang = useSelector((state) => state.stateLang.lng);
  const images = [];

  if (product.data.imageFile1 && product.data.imageFile1.confirmed) {
    images.push({ src: product.data.imageFile1.filePath, id: product.data.id });
  }
  if (product.data.imageFile2 && product.data.imageFile2.confirmed) {
    images.push({ src: product.data.imageFile2.filePath, id: product.data.id });
  }
  if (product.data.imageFile3 && product.data.imageFile3.confirmed) {
    images.push({ src: product.data.imageFile3.filePath, id: product.data.id });
  }
  if (product.data.imageFile4 && product.data.imageFile4.confirmed) {
    images.push({ src: product.data.imageFile4.filePath, id: product.data.id });
  }
  if (product.data.imageFile5 && product.data.imageFile5.confirmed) {
    images.push({ src: product.data.imageFile5.filePath, id: product.data.id });
  }

  const payHandler = () => {
    if (state.loginStatus) {
      dispatch(closePopUp());
    }
  };
  const addWatchHandler = () => {};
  return (
    <>
      <div className="row  m-0">
        <div className={`col-lg-5 col-12  ${style.productSlider}`}>
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
        <div className={`col-lg-7 col-12 ${style.information} mt-5 `}>
          <div>
            <h1>{lang === "fa" ? product.data.title : product.data.titleEn}</h1>
            <div
              className={`w-100 d-flex justify-content-between ${style.info}`}
            >
              <div>
                <span className={style.price}>
                  {product.data.price + t("t")}
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
                  <span className="d-block mb-2">{t("Compatiblewith")}</span>
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
                  text={t("pay")}
                  onClick={(e) => payHandler()}
                />
                <NormalBtn
                  color="white"
                  text={t("addWatch")}
                  onClick={(e) => addWatchHandler()}
                />
              </div>
            </div>
          </div>
          <div>
            <AllComment product={product[0]} className="col" />
          </div>
        </div>
      </div>
      <PopUp open={open} setOpen={setOpen} />
    </>
  );
};

export default ProductContent;
