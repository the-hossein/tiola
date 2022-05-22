import React from "react";
import style from "./Input.module.css";
import { useDispatch } from "react-redux";
import { getphone } from "../../redux/sign/signActions";

const Input = ({
  lablelText,
  type,
  placeholder,
  color,
  changehandler,
  maxLength,
  focusHandler,
  name,
  keyDown,
  value
}) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label
            to="input"
            className={`d-block text-start pb-2  ${style.inputLabel} ${
              color === "dark" ? style.darkText : style.lightText
            }`}
          >
            {lablelText}
          </label>
          <input
          name={name}
            type={type}
            className={`form-control text-start ${style.input}`}
            id="input"
            value={value}
            placeholder={placeholder}
            onChange={changehandler}
            maxLength={maxLength}
            onFocus={focusHandler}
            onKeyDown={keyDown}
          />
        </div>
      </form>
    </>
  );
};

export default Input;
