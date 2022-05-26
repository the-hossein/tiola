import React from "react";
import ColorPick from "../../tools/colorPick/ColorPick";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import ProductSlider from "../productSlider/ProductSlider";
import AllComment from "./comments/AllComment";
import style from "./Productpage.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

import { useTranslation } from "react-i18next";
const ProductContent = () => {
  const { t } = useTranslation();
  const product2 = [
    {
      src: "/Assets/images/3.jpeg"
      ,id:10
    },
    {
      src: "/Assets/images/4.jpeg"
      ,id:20

    },
    {
      src: "/Assets/images/5.jpeg"
      ,id:30

    },
    {
      src: "/Assets/images/2.jpeg"
      ,id:40

    },
    {
      src: "/Assets/images/4.jpeg"
      ,id:50

    },
    {
      src: "/Assets/images/5.jpeg"
      ,id:60

    },
    {
      src: "/Assets/images/2.jpeg"
      ,id:70

    },
    {
      src: "/Assets/images/1.jpeg"
      ,id:80

    },
 
  ];

  return (
    <>
      <div className="row  m-0">
        <div className={`col-lg-5 col-12  ${style.productSlider}`}>
          <ProductSlider
            slidesShow={1.4}
            images={product2}
            arrowStatus={false}
            margin={20}
            heightImage="82vh"
            mbItem={1}
            tbItem={2}
          />
        </div>
        <div className={`col-lg-7 col-12 ${style.information} mt-5 `}>
          
          <h1>{t("scurf") + " No 1"}</h1>
          <div className={`w-100 d-flex justify-content-between ${style.info}`}>
            <div>
              <span className={style.price}>{"250/000 " + t("t")}</span>

              <p className={style.content}>
                <ReactReadMoreReadLess
                  charLimit={300}
                  readMoreText={t("Readmore")}
                  readLessText={t("Readless")}
                  readMoreClassName={style.readmore}
                  readLessClassName={style.readLess}
                >
                  {t("collection1Content")}
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

          <AllComment />
        </div>
      </div>
    </>
  );
};

export default ProductContent;
