import React from "react";
import { useTranslation } from "react-i18next";
import Placement from "../../../tools/placement/Placement";
import List from "./List";

const BuyLists = ({ data, setBasketDatas }) => {
  const { t } = useTranslation();
  return (
    <div>
      {data.map((item) => (
        <>
          <List data={item} alldata={data} setBasketDatas={setBasketDatas} />
        </>
      ))}
      {data.length <= 0 && <Placement text={t("placementfactorList")} />}
    </div>
  );
};

export default BuyLists;
