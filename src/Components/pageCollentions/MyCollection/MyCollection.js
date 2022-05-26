import React from "react";
import CollectionInfo from "./CollectionInfo";
import style from "./PageCollection.module.css";
import Link from "next/link";
const MyCollection = ({data}) => {
  console.log(data)
  return (
    <>
      <Link href={`/collection/${data.id}`}>
        <div
          className={`col-xl-3 col-lg-3 col-sm-6 col-12 ${style.myCollection} `}
        >
          <div className="text-center">
            <img src={data.picture.filePath} />

            <CollectionInfo data={data} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyCollection;
