import React from "react";
import { useTranslation } from "react-i18next";
import SecondlyButton from "../../../tools/secondlyButton/SecondlyButton";
import RectangleProduct from "../product/RectangleProduct";
import Link from "next/link";
import SquareProduct from "../product/SquareProduct";
import style from "../productsCategorization/ProductsCategory.module.css";
const MBproductCategory = ({ reverse, page, data, title }) => {
  const { t } = useTranslation();
  return (
    <section>
      <div className={style.container}>
        <div className={`row ${reverse === true ? "flex-row-reverse" : ""} `}>
          {page === "shopPage" && <h3 className={style.title}>{title}</h3>}
          <div className={`col-6 ${style.MbproductPhoto}`}>
            <RectangleProduct data={data[0]} />
          </div>
          <div className="col-6 pb-2 ">
            <div className="col-12 pb-2">
              <SquareProduct data={data[1]} />
            </div>
            <div className="col-12 pb-2">
              <SquareProduct data={data[2]} />
            </div>
          </div>
        </div>
        <div className="row pb-2">
          <div className={`col-6 ${style.MbproductPhoto}`}>
            <SquareProduct data={data[3]} />
          </div>
          <div className="col-6 ">
            <SquareProduct data={data[4]} />
          </div>
        </div>
        <div
          className={`text-center m-3 ${page === "collPage" ? "d-none" : ""} `}
        >
          <Link href={`/category/categoryname`}>
            <SecondlyButton text={t("simpleViewAll")} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MBproductCategory;
