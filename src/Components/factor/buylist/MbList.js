import React, { useEffect } from "react";
import ColorPick from "../../../tools/colorPick/ColorPick";
import { useTranslation } from "react-i18next";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import style from "./BuyList.module.css";
import PrimaryButton from "../../../tools/primaryButton/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Link from "next/link";
import { checkSavedItem } from "../../../redux/saveItem/saveItemAction";
import persianNumber from "../../../tools/persianNumber/persianNumber";
import DeleteIcon from "@mui/icons-material/Delete";

const MbList = ({
  data,
  addWatchHandler,
  info,
  increaseHandler,
  decreseHandler,
  preload,
  deleteHandler
}) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  const state = useSelector((state) => state.stateRegister);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.loginStatus && state.userid !== "") {
      const userID = state.userid;
      dispatch(checkSavedItem(userID));
    }
  }, []);
  return (
    <div className={style.Mbrow}>
      <CloseOutlinedIcon
        sx={{ fontSize: 24 }}
        className={style.close}
        onClick={deleteHandler}
      />
      <div className={`d-flex flex-column justify-content-between w-100 `}>
        <ul className="d-flex align-items-center justify-content-around  w-100 p-0">
          <li>{lang === "fa" ? data.title : data.titleEn}</li>

          <li>
            {lang === "fa" ? data.collection.title : data.collection.titleEn}
          </li>
          <li className={style.price}>
            {lang === "fa"
              ? persianNumber(info.total) + t("t")
              : info.total + t("t")}
          </li>

          <ColorPick color={data.compatibleColors.split(",")[1]} />
        </ul>
        <div className="d-flex flex-row align-items-center justify-content-evenly mt-3 mb-3">
          <Link href={`/product/${data.productId}`}>
            <a>
              <img src={data.filePath} />
            </a>
          </Link>
          <div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              {preload ? (
                <Spinner animation="grow" />
              ) : (
                <>
                  {info.qty <= 1 ? (
                    <DeleteIcon
                      className={style.deleteicon}
                      onClick={deleteHandler}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={style.minus}
                      onClick={decreseHandler}
                    />
                  )}
                  <span className={style.count}>{info.qty}</span>
                  <AddOutlinedIcon
                    sx={{ fontSize: 30, margin: 0 }}
                    className={style.add}
                    onClick={increaseHandler}
                  />
                </>
              )}
            </div>
            <PrimaryButton
              light={true}
              btnText={t("addWatchList")}
              onClick={(e) => addWatchHandler()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MbList;
