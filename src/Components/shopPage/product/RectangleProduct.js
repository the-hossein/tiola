import React from "react";
import style from "./Product.module.css";
import ProductInfo from "./ProductInfo";
import Link from "next/link";
import { useSelector } from "react-redux";
const RectangleProduct = ({ page, data,reverse }) => {
  if (typeof data !== "undefined") {
    return (
      <>
        {data.imageFile1.confirmed === true ? (
          <Link href={`/product/${data.id}`}>
            <a className={reverse ? style.retDirRevese : style.retDir}>
              <div
                className={`m-0 ${style.product} ${style.ret} col-12 overflow-hidden `}
              >
                <img
                  src={data.imageFile1.filePath}
                  alt="product"
                  className={`${style.rectanglePhoto} ${
                    page === "collPage" ? style.collPage : style.shopPage
                  }`}
                />

                <ProductInfo more={true} data={data} />
              </div>
            </a>
          </Link>
        ) : (
          ""
        )}
      </>
    );
  }
};

export default RectangleProduct;
