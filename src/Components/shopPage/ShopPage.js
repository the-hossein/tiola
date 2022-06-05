import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ProductsCategory from "./productsCategorization/ProductsCategory";
import style from "./ShopPage.module.css";
const ShopPage = () => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateShop);
  return (
    <>
      <h1 className={style.shop}>{t("shop")}</h1>
      {state.data.data.map((item, index) => (
        <Fragment key={index}>
          <ProductsCategory
            reverse={index % 2 !== 0 ? true : false}
            data={item.products}
            title={item.title}
            type={item.products[0]}
          />
        </Fragment>
      ))}
    </>
  );
};

export default ShopPage;
