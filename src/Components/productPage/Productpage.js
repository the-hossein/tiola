import React from "react";
import { useTranslation } from "react-i18next";
import ProductSlider from "../productSlider/ProductSlider";
import ProductContent from "./ProductContent";
import style from "./Productpage.module.css";
const Productpage = ({ product, similar }) => {
  const { t } = useTranslation();
  console.log(similar);
  const images = [];
  var itm;
  similar.data.map((item) => {
    if (item.imageFile1.confirmed) {
      itm = item.imageFile1.filePath;
    }
    images.push({ src: itm, id: item.id });
  });
  return (
    <section>
      <ProductContent product={product} similar={similar} />
      <div className="container mb-4 mt-5">
        <h1 className={style.similar}>{t("Similar")}</h1>
        <ProductSlider
            radius={8}
            mbItem={1}
            tbItem={3}
            slidesShow={5}
            images={images}
            arrowStatus={true}
            margin={20}
            heightImage={'300px'}
          />
      </div>
    </section>
  );
};

export default Productpage;
