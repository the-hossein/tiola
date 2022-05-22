import { t } from "i18next";
import React from "react";
import style from "./Product.module.css";

import ProductInfo from "./ProductInfo";

const SquareProduct = () => {
  return (
    <>

      {/* <div className={`${style.product} d-flex flex-column`}> */}
        <div className={ `col-12 overflow-hidden  ${style.squarePhoto}`}>
          <img alt="product" src="/Assets/images/1.jpeg" />
        </div>
        <ProductInfo more={true}/>
    
    </>
  );
};

export default SquareProduct;
