import React from "react";
import style from "./UserProfile.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/saveItem/saveItemAction";

const RowProduct = ({ close, statusText, data, userId, removeId, onclick }) => {
  const dateC =data ?  data.createdDatetime.split("T") : '';
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const test = () => {
    dispatch(removeItem(removeId, userId));
  }

  return (
    <>
       
        <div className={style.RowProduct}>
        {close && (
          <CloseIcon
            sx={{ color: "#707070", fontSize: 18, cursor: "pointer" }}
            className={style.close}
            onClick={test}
          />
        )}
          <div className={` d-flex `}>
            {/* {t("scarf")}  t("mirdamad") */}
            <span onClick={()=> onclick(data.id)} > {data ? data.title : "nonono"}</span>
            <span>{data ? dateC[0] : "kd"}</span>
            <span>{data ? data.collection.title : "mirdamad"}</span>
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
