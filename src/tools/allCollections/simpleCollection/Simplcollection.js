import React from "react";
import ColorPick from "../../colorPick/ColorPick";
import ViewAll from "../../viewAll/ViewAll";
import CollectionText from "../CollectionText";
import Link from 'next/link'
import style from "./Simplcollection.module.css";
import { useTranslation } from "react-i18next";
const Simplcollection = ({image1,image2,content,title}) => {
  const { t } = useTranslation()
  return (
    <>
 <Link href="/shop">
 <div className={`row justify-content-center flex-row-reverse mt-5 mb-5 pb-3 ${style.collection}`}>
        <div className={` col-xl-6 col-lg-7 col-md-7 col-12 text-center d-flex justify-content-end p-0  pt-4  pb-4 ${style.collectionImage}`}>
          <div className={`d-flex justify-content-center ${style.containerPic}`}>
            <img src={image1} />
            <img src={image2} className={style.fixedBorder} />
          </div>
        </div>
        <div className={` col-xl-4 col-lg-5 col-md-5 col-12 position-relative d-flex flex-column pb-4 justify-content-between ${style.content}`}>
       <CollectionText title={title}  content={content} btnText={t("btnShopLand")} href={'/shop'} />
        </div>
      </div>
 </Link>
    </>
  );
};

export default Simplcollection;
