import React from "react";
import { useTranslation } from "react-i18next";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from '../productsCategorization/ProductsCategory.module.css'
const MBproductCategory = () => {
    const {t }=useTranslation()
  return (
    <section>
      <div className="container mt-4">
        <div className="row">
            <h1 className={style.title}>{t("scarf")}</h1>
          <div className="col-6">
            <RectangleProduct />
          </div>
          <div className="col-6 ">
            <div className="col-12">
              <SquareProduct />
            </div>
            <div className="col-12">
              <SquareProduct />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 p1-0 pr-0 ">
            <SquareProduct />
          </div>
          <div className="col-6 ">
            <SquareProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MBproductCategory;
