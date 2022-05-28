import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import BlurButton from "../../tools/blurButton/BlurButton";
import ProductsCategory from "../shopPage/productsCategorization/ProductsCategory";
import Style from "./CollectionDetails.module.css";
import { getcollectionproduct } from "../../redux/collectionDetail/collectionAction";
const CollectionDetails = ({ data }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateColProduct);

  return(
    <section>
     <div className="position-relative">
        <img src="/Assets/images/col.png" className={Style.collectionPic} />
        <div className={`${Style.collectionName}`}>
          <BlurButton btnText={t("coolection") + " No 1"} />
        </div>
      </div>

      <div className="mt-5 mb-5">
      {state.data.map((item, index) => (
        <>
          <ProductsCategory
            reverse={index % 2 !== 0 ? true : false}
            data={item}
            type={null}
          />
        </>
      ))}
      </div>
    </section>
  );
};

export default CollectionDetails;
