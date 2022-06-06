import React from "react";
import style from "./Category.module.css";
import Image from "next/image";
import category1 from "../../../public/Assets/images/2.jpeg";
import { useTranslation } from "react-i18next";
import CategoryProduct from "./CategoryProduct";
import Link from "next/link";
const Category = ({ data }) => {
  const { t } = useTranslation();
  console.log(data);

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
        <h1 className={style.categoryType}>{t(`${data[0].type}`)}</h1>
        <div className="row">
          {data.slice(0, 3).map(
            (item) =>
              item.imageFile1.confirmed && (
                <>
                
                  <Link href={`/product/${item.id}`}>
                   <a
                      className={`col-lg-4 col-md-4 col-12 mb-3 ${style.CategoryPhoto}`}
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
