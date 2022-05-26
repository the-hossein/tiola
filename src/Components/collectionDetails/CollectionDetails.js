import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import BlurButton from "../../tools/blurButton/BlurButton";
import ProductsCategory from "../shopPage/productsCategorization/ProductsCategory";
import Style from "./CollectionDetails.module.css";
const CollectionDetails = () => {
  const router = useRouter();
  const { t } = useTranslation();


  return (
    <section>
      <img src="/Assets/images/col.png" className={Style.collectionPic} />
      <div
        className={`${Style.collectionName}`}
      >
        <BlurButton btnText={t("coolection") + " No 1"} />
      </div>
      
      <ProductsCategory reverse={index % 2 !== 0 ? true : false}/>
    </section>
  );
};

export default CollectionDetails;
