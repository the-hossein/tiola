import React from "react";
import style from "./Product.module.css";
import ProductInfo from "./ProductInfo";
const RectangleProduct = () => {
  return (
    <>
      <div className={`m-0 ${style.product} d-flex flex-column`}>
        <div  className={style.rectanglePhoto}>

        <img
          src="/Assets/images/3.jpeg"
          alt="product"
         
        />

        </div>
        <ProductInfo />
      </div>
    </>
  );
};

export default RectangleProduct;
