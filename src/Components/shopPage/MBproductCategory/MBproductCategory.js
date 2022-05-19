import React from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from "../productsCategorization/ProductsCategory.module.css";
const MBproductCategory = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mt-4">
        <div className="row">
          <h1 className={style.title}>{t("scarf")}</h1>
          <div className={`col-6 ${style.MbproductPhoto}`}>
            <RectangleProduct />
          </div>
          <div className="col-6 pb-3 ">
            <div className="col-12 pb-3">
              <SquareProduct />
            </div>
            <div className="col-12 pb-3">
              <SquareProduct />
            </div>
          </div>
        </div>
        <div className="row pb-3">

          <div className={`col-6 ${style.MbproductPhoto}`}>
            <SquareProduct />
          </div>
          <div className="col-6 ">
            <SquareProduct />
          </div>
        </div>
<div className="text-center m-3">
<SecondlyButton text={t("simpleViewAll")} />

</div>
      </div>
    </section>
  );
};

export default MBproductCategory;
