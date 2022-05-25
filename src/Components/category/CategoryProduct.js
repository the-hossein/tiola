import React from "react";
import style from "./Category.module.css";
import ProInformation from "./ProInformation";

const CategoryProduct = ({ data }) => {
  return (
    <div className={`${style.CategoryProduct} col-lg-3 col-md-4 col-12 pt-3 pb-3`}>
      <div>
        <img src={data.src} alt="productImage" />

        <ProInformation />
        
      </div>
    </div>
  );
};

export default CategoryProduct;
