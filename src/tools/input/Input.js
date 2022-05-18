import React from "react";
import style from "./Input.module.css";
const Input = ({ lablelText, type, placeholder }) => {
  return (
    <>
      <form>
        <div className="form-group">
          <label
            to="input"
            className={`d-block text-start pb-2 text-white ${style.inputLabel}`}
          >
            {lablelText}
          </label>
          <input
            type={type}
            className={`form-control text-start ${style.input}`}
            id="input"
            placeholder={placeholder}
          />
        </div>
      </form>
    </>
  );
};

export default Input;
