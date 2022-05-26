import React from "react";
import style from "./Category.module.css";
import Image from "next/image";
import category1 from "../../../public/Assets/images/2.jpeg";
import { useTranslation } from "react-i18next";
import CategoryProduct from "./CategoryProduct";
const Category = () => {
  const { t } = useTranslation();
  const product = [
    {
      src: "/Assets/images/3.jpeg"
    },
    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/1.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    }
  ];
  return (
    <section>
      <div className="container mt-5">
        <h1 className="pb-4">{t("scurf")}</h1>
        <div className="row">
          <div className={`col-lg-4 col-md-4 col-12 ${style.CategoryPhoto}`}>
            <Image src={category1} alt="category pic " />
          </div>
          <div className={`col-lg-4 col-md-4 col-6 ${style.CategoryPhoto}`}>
            <Image src={category1} alt="category pic" />
          </div>
          <div className={`col-lg-4 col-md-4 col-6 ${style.CategoryPhoto}`}>
            <Image src={category1} alt="category pic" />
          </div>
        </div>
        <div className="row">
          {product.map((item) => (
            <>
              <CategoryProduct data={item}  key={item.src}/>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
