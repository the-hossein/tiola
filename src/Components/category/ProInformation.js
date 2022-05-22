import React from "react";
import { useTranslation } from "react-i18next";
import ProductInfo from "../shopPage/product/ProductInfo";
import ProActions from "./ProActions";

const ProInformation = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column">
      <ProductInfo more={false} />
      <ProActions />
    </div>
  );
};

export default ProInformation;
