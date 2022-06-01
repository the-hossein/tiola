import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeTrue } from "../../../redux/comment/commentActions";
import style from "./Comments.module.css";
import WriteComment from "./WriteComment";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const AddComment = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateComment);
  const openHandler = () => {
    dispatch(writeTrue());
  };
  return state.writeCm === true ? (
    <WriteComment />
  ) : (
    <div
      className={`${style.addComment}`}
      onClick={openHandler}
    >
      <div className="text-center">
        <p>Add Comment</p>
        <div className={style.add}>
          <AddCircleOutlineIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
