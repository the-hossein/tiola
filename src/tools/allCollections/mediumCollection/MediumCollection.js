import React from "react";
import ColorPick from "../../colorPick/ColorPick";
import ViewAll from "../../viewAll/ViewAll";
import CollectionText from "../CollectionText";
import Link from "next/link";

import style from "./MediumCollection.module.css";
import { useTranslation } from "react-i18next";
const MediumCollection = ({
  image1,
  image2,
  image3,
  content,
  title,
  color
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`row justify-content-center  mt-5 mb-5 pb-3  ${style.collection}`}
      >
        <div
          className={`col-xl-8 col-lg-8 col-md-8 col-12 text-center d-flex justify-content-start p-0 pt-4  pb-4 ${style.collectionImage}`}
        >
          <Link href="/shop">
        <a>
        <div
              className={`d-flex justify-content-center ${style.containerPic}`}
            >
              <img src={image1} />
              <img src={image2} />
              <img src={image3} />
            </div>
        </a>
          </Link>
        </div>
        <div
          className={`col-xl-4 col-lg-4 col-md-4 col-12 position-relative d-flex flex-column pb-4 justify-content-between ${style.content}`}
        >
          <CollectionText
            title={title}
            content={content}
            reverse={true}
            btnText={t("btnShopLand")} href='/shop'
            second={true}
          />
        </div>
      </div>
    </>
  );
};

export default MediumCollection;
