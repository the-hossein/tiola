import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import HardCollection from "../../tools/allCollections/hardCollection/HardCollection";
import MediumCollection from "../../tools/allCollections/mediumCollection/MediumCollection";
import Simplcollection from "../../tools/allCollections/simpleCollection/Simplcollection";
import style from './Collection.module.css'
const Collection = ({ dir }) => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className={`${style.landingCategory}`}>
          <div className="row justify-content-center m-0">
            <div className="col-lg-12 col-md-12 col-11 p-0">
              <Simplcollection
                image1="/Assets/images/4.jpg"
                image2="/Assets/images/10.jpg"
                content={t("collection1Content")}
                color="exapmle"
                title={t("collection1")}
              />
              <MediumCollection
                image1={"/Assets/images/6.jpg"}
                image2={"/Assets/images/7.jpg"}
                image3={"/Assets/images/10.jpg"}
                title={t("collection2")}
                content={t("collection2Content")}

                color="example"
              />
              <HardCollection
                image={"/Assets/images/9.jpg"}
                title={t("viewExplore")}
                content={t("viewExploreText")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
