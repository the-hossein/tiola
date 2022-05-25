import React from "react";
import { useTranslation } from "react-i18next";
import ColorPick from "../../tools/colorPick/ColorPick";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import ProductSlider from "../productSlider/ProductSlider";
import AllComment from "./comments/AllComment";
import style from "./Productpage.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
const Productpage = () => {
  const { t } = useTranslation();
  const product = [
    {
      src: "/Assets/images/3.jpeg"
    },
    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/1.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    }
  ];

  return (
    <section>
      <div className="row  m-0">
        <div className={`col-lg-5 col-12  ${style.productSlider}`}>
          <ProductSlider
            slidesShow={1.4}
            images={product}
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
          
              <p className={style.content}>    <ReactReadMoreReadLess
              
              charLimit={300}
              readMoreText={t("Readmore")}
              readLessText={t("Readless")}
              readMoreClassName={style.readmore}
              readLessClassName={style.readLess}
            >
            {t("collection1Content")}
            </ReactReadMoreReadLess></p>
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
      <div className="container mb-4">
        <h1 className={style.similar}>Similar</h1>
        <ProductSlider
          arrowStatus={true}
          images={product}
          slidesShow={5}
          margin={16}
          heightImage={"350px"}
          borderRadius={"8px"}
          mbItem={1}
          tbItem={2}
        />
      </div>
    </section>
  );
};

export default Productpage;
