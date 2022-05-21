import React from "react";
import ColorPick from "../colorPick/ColorPick";
import ViewAll from "../viewAll/ViewAll";
import style from './CollectionText.module.css'
const CollectionText = ({content,title,color,reverse}) => {
  return (
    <>
      <div>
        <h3 className={style.collectionTitile}>{title}</h3>
        <p className="lh-lg">{content}</p>

        <ColorPick color={color} />
      </div>
      <div className={reverse===true?style.ViewAllLeft:style.ViewAll}>
        <ViewAll />
      </div>
    </>
  );
};

export default CollectionText;
