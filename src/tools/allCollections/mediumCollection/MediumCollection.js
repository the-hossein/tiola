import React from "react";
import ColorPick from "../../colorPick/ColorPick";
import ViewAll from "../../viewAll/ViewAll";
import CollectionText from "../CollectionText";
import style from "./MediumCollection.module.css";
const MediumCollection = ({image1,image2,image3,content,title,color}) => {
  return (
    <>
      <div
        className={`row justify-content-center  mt-5 mb-5 pb-3  ${style.collection}`}
      >
        <div
          className={`col-xl-7 col-lg-7 col-md-8 col-12 text-center d-flex justify-content-start p-0 pt-4  pb-4 ${style.collectionImage}`}
        >
          <div className={`d-flex justify-content-center ${style.containerPic}`}>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
          </div>
        </div>
        <div
          className={`col-xl-4 col-lg-5 col-md-4 col-12 position-relative d-flex flex-column pb-4 justify-content-between ${style.content}`}
        >
               <CollectionText title={title}  content={content} reverse={true}/>

        
        </div>
      </div>
    </>
  );
};

export default MediumCollection;
