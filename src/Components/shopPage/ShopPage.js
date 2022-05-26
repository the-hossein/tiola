import React from "react";
import { useTranslation } from "react-i18next";
import ProductsCategory from "./productsCategorization/ProductsCategory";
import style from "./ShopPage.module.css";
const ShopPage = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={style.shop}>{t("shop")}</h1>
      {data.map((data, index) => (
        <>
          <ProductsCategory
            reverse={index % 2 !== 0 ? true : false}
            data={data}
          />
        </>
      ))}
    </>
  );
};

export default ShopPage;
