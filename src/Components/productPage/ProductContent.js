import React from "react";
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
const ProductContent = ({ product }) => {
  const { t } = useTranslation();
  const images = [];

  if (product.imageFile1 && product.imageFile1.confirmed) {
    images.push({ src: product.imageFile1.filePath, id: product.id });
  }
  if (product.imageFile2 && product.imageFile2.confirmed) {
    images.push({ src: product.imageFile2.filePath, id: product.id });
  }
  if (product.imageFile3 && product.imageFile3.confirmed) {
    images.push({ src: product.imageFile3.filePath, id: product.id });
  }
  if (product.imageFile4 && product.imageFile4.confirmed) {
    images.push({ src: product.imageFile4.filePath, id: product.id });
  }
  if (product.imageFile5 && product.imageFile5.confirmed) {
    images.push({ src: product.imageFile5.filePath, id: product.id });
  }
  console.log(product);
  return (
    <>
      <div className="row  m-0">
        <div className={`col-lg-5 col-12  ${style.productSlider}`}>
          {/* <ProductSlider
            slidesShow={1.4}
            images={images}
            arrowStatus={false}
            margin={20}
            heightImage="82vh"
            mbItem={1.4}
            tbItem={2}
            loop={true}
          /> */}
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
          <h1>{product.title}</h1>
          <div className={`w-100 d-flex justify-content-between ${style.info}`}>
            <div>
              <span className={style.price}>{product.price + t("t")}</span>

              <p className={style.content}>
                <ReactReadMoreReadLess
                  charLimit={300}
                  readMoreText={t("Readmore")}
                  readLessText={t("Readless")}
                  readMoreClassName={style.readmore}
                  readLessClassName={style.readLess}
                >
                  {product.description}
                </ReactReadMoreReadLess>
              </p>
              <div>
                <span className="d-block mb-2">{t("Compatiblewith")}</span>
                {product.compatibleColors.split(",").map((color) => (
                  <>
                    <ColorPick color={color} />
                  </>
                ))}
              </div>
            </div>
            <div className={style.buttons}>
              <NormalBtn color="red" text={t("pay")} />
              <NormalBtn color="white" text={t("addWatch")} />
            </div>
          </div>
          <div className="row">
            <AllComment className="col" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
