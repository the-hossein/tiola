import React from "react";
import ColorPick from "../colorPick/ColorPick";
import Link from "next/link";
import ViewAll from "../viewAll/ViewAll";
import style from "./CollectionText.module.css";
const CollectionText = ({ content, title, reverse,btnText, href }) => {
  return (
    <>
      <div>
        <h3 className={style.collectionTitile}>{title}</h3>
        <p className={style.CollectionText}>{content}</p>
      </div>
      <div className={reverse === true ? style.ViewAllLeft : style.ViewAll}>
    
            <ViewAll content={btnText} linked={href} />
   
      </div>
    </>
  );
};

export default CollectionText;
