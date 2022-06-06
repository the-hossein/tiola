import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import NormalBtn from "../../tools/normalBtn/NormalBtn";
import PrimaryButton from "../../tools/primaryButton/PrimaryButton";

const ProActions = ({id}) => {
  const { t } = useTranslation();
  const morePro = () => {};
  const addwatch = () => {};
  return (
    <div className="d-flex justify-content-between mt-4 mb-2">
     <Link href={`/product/${id}`}>
   <a>
   <PrimaryButton
        light={true}
        btnText={t("simpleViewMore")}
        onClick={morePro}
      />
   </a>
     </Link>
      <PrimaryButton light={true} btnText={t("watchlist")} onClick={addwatch} />
    </div>
  );
};

export default ProActions;
