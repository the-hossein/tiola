import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeTrue } from "../../../redux/comment/commentActions";
import style from "./Comments.module.css";
import WriteComment from "./WriteComment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTranslation } from "react-i18next";
const AddComment = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const state = useSelector((state) => state.stateComment);
  const openHandler = () => {
    dispatch(writeTrue());
  };
  return state.writeCm === true ? (
    <WriteComment />
  ) : (
    <div className={`${style.addComment}`} onClick={openHandler}>
      <div className="text-center">
        <p>{t("addCm")}</p>
        <div className={style.add}>
          <AddCircleOutlineIcon
            sx={{
              fontSize: 70,
              color: "var(--lightGray-border)",
              stroke: "white"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
