import React from "react";
import ColorPick from "../../colorPick/ColorPick";
import ViewAll from "../../viewAll/ViewAll";
import CollectionText from "../CollectionText";
import style from "./Simplcollection.module.css";
const Simplcollection = ({image1,image2,content,title}) => {
  return (
    <>
      <div className={`row justify-content-center flex-row-reverse mt-5 mb-5 pb-3 ${style.collection}`}>
        <div className={` col-xl-4 col-lg-5 col-md-6 col-12 text-center d-flex justify-content-end p-0  pt-4  pb-4 ${style.collectionImage}`}>
          <div className="d-flex justify-content-center">
            <img src={image1} />
            <img src={image2} />
          </div>
        </div>
        <div className={` col-xl-6 col-lg-7 col-md-6 col-12 position-relative d-flex flex-column pb-4 justify-content-between ${style.content}`}>
       <CollectionText title={title} color={"#82C2B9"} content={content}/>
        </div>
      </div>
    </>
  );
};

export default Simplcollection;