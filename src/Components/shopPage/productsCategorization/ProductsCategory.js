import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import MBproductCategory from "../MBproductCategory/MBproductCategory";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from "./ProductsCategory.module.css";
import {useRouter} from 'next/router'
const ProductsCategory = ({ reverse }) => {
  const { t } = useTranslation();
  const [size, setSize] = useState([0]);
  const router=useRouter()

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size > 768 ? (
    <section>
      <div className={`${style.container}`}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-12 mt-5 mb-5">
            <div
              className={`row justify-content-center ${
                reverse === true ? "flex-row-reverse" : ""
              } `}
            >
              <h3 className={style.title}>{t("scarf")}</h3>
              <div
                className={`col-xl-4 col-lg-4 col-sm-4  d-flex flex-column ${
                  reverse === true ? " align-items-end" : ""
                } ${style.rectPhoto} `}
              >    
                <RectangleProduct page={router.pathname==="/collection/[collectionName]"?"collPage":"shopPage"} />
                <div className={`mt-4 w-100 ${router.pathname==="/collection/[collectionName]"?style.collPage:style.shopPage}`}>
                  <SecondlyButton text={t("simpleViewAll")} />
                </div>
              </div>

              <div className="col-lg-8 co-md-8 col-8">
                <div className="row ">
                  <div className={`col-6  pb-3  ${style.productPhoto}`}>
                    <SquareProduct />
                  </div>
                  <div className={`col-6   pb-3 ${style.productPhoto}`}>
                    <SquareProduct />
                  </div>

                  <div className={`col-6  pb-3  ${style.productPhoto}`}>
                    <SquareProduct />
                  </div>
                  <div className={`col-6  pb-3  ${style.productPhoto}`}>
                    <SquareProduct />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <MBproductCategory reverse={reverse} page={router.pathname==="/collection/[collectionName]"?"collPage":"shopPage"} />
  );
};

export default ProductsCategory;
