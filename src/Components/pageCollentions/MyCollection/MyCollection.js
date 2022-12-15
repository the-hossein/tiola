import React from "react";
import CollectionInfo from "./CollectionInfo";
import style from "./PageCollection.module.css";
import Link from "next/link";
const MyCollection = ({ data }) => {
  return (
    <>
    {/* {data.picture.confirmed? */}
    
  
      <Link href={`/collections/${data.id}`}>
        <a
          className={`col-xl-3 col-lg-4 col-sm-6 col-12 ${style.myCollection} `}
        >
          <div className="text-center">
            <img src={data.picture.filePath} />

            <CollectionInfo data={data} />
          </div>
        </a>
      </Link>
  {/* :""} */}
    </>
  );
};

export default MyCollection;
