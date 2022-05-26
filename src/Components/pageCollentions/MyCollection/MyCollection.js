import React from "react";
import CollectionInfo from "./CollectionInfo";
import style from "./PageCollection.module.css";
import Link from "next/link";
const MyCollection = () => {
  return (
    <>
      <Link href={`/collection/collNaame`}>
        <div
          className={`col-xl-3 col-lg-3 col-sm-6 col-12 ${style.myCollection} `}
        >
          <div className="text-center">
            <img src="/Assets/images/2.jpeg" />

            <CollectionInfo />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyCollection;
