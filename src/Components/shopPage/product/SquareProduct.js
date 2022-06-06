import { t } from "i18next";
import Link from "next/link";
import React from "react";
import style from "./Product.module.css";

import ProductInfo from "./ProductInfo";

const SquareProduct = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <>
        {data.imageFile1.confirmed === true ? (
          <>
            <Link href={`/product/${data.id}`}>
             <a>
             <div className={`col-12 overflow-hidden  ${style.squarePhoto}`}>
                <img alt="product" src={data.imageFile1.filePath} />
              </div>
             </a>
            </Link>
            <ProductInfo more={true} data={data} />
          </>
        ) : (
          ""
        )}
      </>
    );
  }
};

export default SquareProduct;
