import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from "./ProductsCategory.module.css";
const ProductsCategory = ({ reverse }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={`container ${style.container}`}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-12 mt-5 mb-5">
            <div
              className={`row justify-content-center ${
                reverse === true ? "flex-row-reverse" : ""
              } `}
            >
              <h1 className={style.title}>{t("scarf")}</h1>
              <div
                className={`col-xl-4 col-lg-4 col-sm-4  d-flex flex-column ${
                  reverse === true ? " align-items-end" : ""
                } `}
              >
                <RectangleProduct />
                <div className="mt-4 w-100 ">
                  <SecondlyButton text={t("simpleViewAll")} />
                </div>
              </div>

              <div className="col-lg-8 co-md-8 col-8">
                <div className="row ">
                  <div className="col-6">
                    <SquareProduct />
                  </div>
                  <div className="col-6">
                    <SquareProduct />
                  </div>
                  <div className="col-6">
                    <SquareProduct />
                  </div>
                  <div className="col-6">
                    <SquareProduct />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCategory;
