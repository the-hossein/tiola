import React from "react";
import { useTranslation } from "react-i18next";
import ProductSlider from "../productSlider/ProductSlider";
import ProductContent from "./ProductContent";
import style from "./Productpage.module.css";
const Productpage = ({ data }) => {
  
  const { t } = useTranslation();
  const product2 = [
    {
      src: "/Assets/images/3.jpeg"
      ,id:1
    },
    {
      src: "/Assets/images/4.jpeg"
      ,id:2

    },
    {
      src: "/Assets/images/5.jpeg"
      ,id:3

    },
    {
      src: "/Assets/images/2.jpeg"
      ,id:4

    },
    {
      src: "/Assets/images/4.jpeg"
      ,id:5

    },
    {
      src: "/Assets/images/5.jpeg"
      ,id:6

    },
    {
      src: "/Assets/images/2.jpeg"
      ,id:7

    },
    {
      src: "/Assets/images/1.jpeg"
      ,id:8

    },
 
  ];

  return (
    <section>
      <ProductContent />
      <div className="container mb-4 mt-5">
        <h1 className={style.similar}>Similar</h1>
        <ProductSlider
          arrowStatus={true}
          images={product2}
          slidesShow={5}
          margin={16}
          heightImage={"350px"}
          borderRadius={"8px"}
          mbItem={1}
          tbItem={2}
        />
      </div>
    </section>
  );
};

export default Productpage;
