import React from "react";
import style from "./Category.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CategoryProduct from "./CategoryProduct";
import Link from "next/link";
const Category = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container mt-5">
        <h1 className={style.categoryType}>{t(`${data[0].type}`)}</h1>
        <div className="row">
          {data.slice(0, 3).map(
            (item) =>
              item.imageFile1.confirmed && (
                <>
                  <Link href={`/product/${item.id}`}>
                    <a
                      className={`col-lg-4 col-md-4 col-4 mb-3 ${style.CategoryPhoto}`}
                    >
                      <img src={item.imageFile1.filePath} alt="category pic " />
                    </a>
                  </Link>
                </>
              )
          )}
        </div>
        <div className="row">
          {data.slice(3, data.length).map((item) => (
            <>
              <CategoryProduct data={item} key={item.id} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
