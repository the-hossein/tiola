import React from "react";
import ColorPick from "../../tools/colorPick/ColorPick";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import ProductSlider from "../productSlider/ProductSlider";
import AllComment from "./comments/AllComment";
import style from "./Productpage.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

import { useTranslation } from "react-i18next";
const ProductContent = ({ product, similar }) => {
  const { t } = useTranslation();
  const images = [];
  var itm;

  similar.data.map((item) => {
    itm = item.collection.picture.filePath;
    images.push({ src: itm, id: item.id });
  });

  return (
    <>
      <div className="row  m-0">
        <div className={`col-lg-5 col-12  ${style.productSlider}`}>
          <ProductSlider
            slidesShow={1.4}
            images={images}
            arrowStatus={false}
            margin={20}
            heightImage="82vh"
            mbItem={1}
            tbItem={2}
            loop={true}
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
                <ColorPick color="#445887" />
                <ColorPick color="#ffd2a8" />
                <ColorPick color="#beb8b6" />
                <ColorPick color="#f8bd14" />
                <ColorPick color="#8bbbe1" />
              </div>
            </div>
            <div className={style.buttons}>
              <NormalBtn color="red" text={t("pay")} />
              <NormalBtn color="white" text={t("addWatch")} />
            </div>
          </div>
            <div className="row">
                <AllComment className='col' />
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
