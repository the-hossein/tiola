import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import MBproductCategory from "../MBproductCategory/MBproductCategory";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from "./ProductsCategory.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
const ProductsCategory = ({ reverse, data, title, type }) => {
  console.log(data);
  const { t } = useTranslation();
  const [size, setSize] = useState([0]);

  const router = useRouter();
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  if (typeof type !== "undefined") {
    return size > 768 ? (
      <section>
        <div className={style.container}>
          <div
            className={`row justify-content-center ${
              router.pathname !== "/collections/[collectionname]"
                ? style.spliterCategory
                : ""
            }`}
          >
            <div className={`col-xl-10 col-lg-12 col-12`}>
              <div
                className={`row justify-content-center  ${
                  reverse === true ? "flex-row-reverse" : ""
                } `}
              >
                {router.pathname !== "/collections/[collectionname]" && (
                  <h3 className={style.title}>{t(`${type.type}`)}</h3>
                )}

                <div
                  className={`col-xl-4 col-lg-4 col-sm-4  d-flex flex-column ${
                    reverse === true ? "align-items-end" : ""
                  } ${style.rectPhoto} `}
                >
                  <RectangleProduct
                    page={
                      router.pathname === "/collections/[collectionname]"
                        ? "collPage"
                        : "shopPage"
                    }
                    data={data[0]}
                  />
                      <Link href={type!==null?`/category/${type.type}`:'/'}>
                  <div
                    className={`mt-5 w-100 ${
                      router.pathname === "/collections/[collectionname]"
                        ? style.collPage
                        : style.shopPage
                    }`}
                  >
                      <SecondlyButton text={t("simpleViewAll")} />
                  </div>
                    </Link>
                </div>

                <div className="col-lg-8 co-md-8 col-8">
                  <div className="row justify-content-end">
                    {data.slice(1, 5).map((item) => (
                      <>
                        <div className={`col-6  pb-3  ${style.productPhoto}`}>
                          <SquareProduct data={item} />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <MBproductCategory
        reverse={reverse}
        page={
          router.pathname === "/collections/[collectionname]"
            ? "collPage"
            : "shopPage"
        }
        data={data}
        title={title}
      />
    );
  }
};

export default ProductsCategory;
