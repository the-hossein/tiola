import React from "react";
import { useTranslation } from "react-i18next";
import ProductsCategory from "./productsCategorization/ProductsCategory";
import style from './ShopPage.module.css'
const ShopPage = () => {
    const{t}=useTranslation()
  return (
    <>
    <h1 className={style.shop}>
        {t("shop")}
    </h1>
      <ProductsCategory />
      <ProductsCategory reverse={true} />
      <ProductsCategory />
    </>
  );
};

export default ShopPage;
