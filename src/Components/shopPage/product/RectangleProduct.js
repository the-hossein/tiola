import React from "react";
import style from "./Product.module.css";
import ProductInfo from "./ProductInfo";
const RectangleProduct = ({ page }) => {
  console.log(page);
  return (
    <>
      <div className={`m-0 ${style.product} col-12 overflow-hidden `}>
       
        
          <img src="/Assets/images/3.jpeg" alt="product"   className={`${style.rectanglePhoto} ${
            page === "collPage" ? style.collPage : style.shopPage
          }`} />
      
        <ProductInfo more={true} />
      </div>


    </>
  );
};

export default RectangleProduct;
