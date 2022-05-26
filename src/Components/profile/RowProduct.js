import React from "react";
import style from "./UserProfile.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";

const RowProduct = ({ close, statusText }) => {
  const { t } = useTranslation();
  return (
    <>
       
        <div className={style.RowProduct}>
        {close && (
          <CloseIcon
            sx={{ color: "#707070", fontSize: 18, cursor: "pointer" }}
            className={style.close}
          />
        )}
          <div className={` d-flex `}>
            <span>{t("scarf")} No1No1No1</span>
            <span>2021/01/31</span>
            <span>{t("mirdamad")}</span>
          </div>
          <div className={style.status}>
            <span>
              {statusText === "completed" ? t("Completed") : t("pending")}
            </span>
            {statusText === "completed" ? (
              <CheckCircleOutlineIcon sx={{ color: "#8ABA70", fontSize: 30 }} />
            ) : (
              <AccessTimeIcon sx={{ color: "#b7b7b7", fontSize: 30 }} />
            )}
          </div>
        </div>
    </>
  );
};

export default RowProduct;
