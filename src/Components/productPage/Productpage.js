import React from "react";
import { useTranslation } from "react-i18next";
import ProductSlider from "../productSlider/ProductSlider";
import ProductContent from "./ProductContent";
import style from "./Productpage.module.css";
const Productpage = ({ product, similar }) => {
  const { t } = useTranslation();
  const images = [];
  var itm;
  similar.data.map((item) => {
    itm = item.collection.picture.filePath;
    images.push({ src: itm, id: item.id });
  });
  return (
    <section>
      <ProductContent product={product} similar={similar} />
      <div className="container mb-4 mt-5">
        <h1 className={style.similar}>{t("Similar")}</h1>
        <ProductSlider
          arrowStatus={true}
          images={images}
          slidesShow={5}
          margin={16}
          heightImage={"350px"}
          borderRadius={"8px"}
          mbItem={1}
          tbItem={2}
          loop={false}
        />
      </div>
    </section>
  );
};

export default Productpage;
