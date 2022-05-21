import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeTrue } from "../../../redux/comment/commentActions";
import style from "./Comments.module.css";
import WriteComment from "./WriteComment";
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
      className={`d-block text-center ${style.addComment}`}
      onClick={openHandler}
    >
      <p>Add Comment</p>
      <div className={style.add}>
        <FontAwesomeIcon icon={faAdd} />
      </div>
    </div>
  );
};

export default AddComment;
