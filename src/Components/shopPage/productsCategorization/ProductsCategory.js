import React, { Fragment, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import MBproductCategory from "../MBproductCategory/MBproductCategory";
import RectangleProduct from "../product/RectangleProduct";
import SquareProduct from "../product/SquareProduct";
import style from "./ProductsCategory.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
const ProductsCategory = ({ reverse, data, title, type }) => {
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

                <div className={`col-xl-5 col-lg-5 col-sm-5  d-flex flex-column ${reverse === true ? "align-items-end" : ""} ${style.rectPhoto} `}>
                  <RectangleProduct
                  reverse={reverse}
                    page={
                      router.pathname === "/collections/[collectionname]"
                        ? "collPage"
                        : "shopPage"
                    }
                    data={data[0]}
                  />
                  <Link href={type !== null ? `/category/${type.type}` : "/"}>
              <a>
              <div
                      className={`mt-5 mb-2 w-100 ${
                        router.pathname === "/collections/[collectionname]"
                          ? style.collPage
                          : style.shopPage
                      }`}
                    >
                      <SecondlyButton text={t("simpleViewAll")} />
                    </div>
              </a>
                  </Link>
                </div>

                <div className="col-lg-7 co-md-7 col-7">
                  <div className={`row ${reverse && "justify-content-end"}`}>
                    {data.slice(1, 5).map((item, index) => (
                      <Fragment key={index}>
                        <div className={`col-6 mb-4 pb-3  ${style.productPhoto}`}>
                          <SquareProduct data={item} />
                        </div>
                      </Fragment>
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
        title={type!==null?t(`${type.type}`):""}
        type={type}
      />
    );
  }
};

export default ProductsCategory;
