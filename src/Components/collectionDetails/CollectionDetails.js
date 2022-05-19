import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import BlurButton from "../../tools/blurButton/BlurButton";
import ProductsCategory from "../shopPage/productsCategorization/ProductsCategory";
import Style from "./CollectionDetails.module.css";
const CollectionDetails = () => {
  const { t } = useTranslation();
  const lang=useSelector(state=>state.stateLang)
  if (typeof window !== "undefined") {
     document.getElementsByTagName('body')[0].style.setProperty("background", "linear-gradient(0deg, rgba(242,242,242,1) 28%, rgba(242,227,193,1) 66%, rgba(255,179,0,1) 100%)", "important")
}
  return (
    <section>
      <img src="/Assets/images/col.png" className={Style.collectionPic} />
      <div className={`${Style.collectionName} ${lang.lng!=="fa"?Style.rightBtn:""}`}>
      <BlurButton btnText={t("coolection") + " No 1"} />

      </div>
      <ProductsCategory/>
      <ProductsCategory reverse={true}/>

    </section>
  );
};

export default CollectionDetails;
