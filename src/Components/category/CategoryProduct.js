import Link from "next/link";
import React from "react";
import style from "./Category.module.css";
import ProInformation from "./ProInformation";

const CategoryProduct = ({ data }) => {
  return (
    data.imageFile1.confirmed && (
      <div
        className={`${style.CategoryProduct} col-lg-3 col-md-4 col-12 pt-3 pb-3`}
      >
        <div>
          <Link href={`/product/${data.id}`}>
           <a>
           <img src={data.imageFile1.filePath} alt="productImage" />
           </a>
          </Link>
          <ProInformation data={data} />
        </div>
      </div>
    )
  );
};

export default CategoryProduct;
