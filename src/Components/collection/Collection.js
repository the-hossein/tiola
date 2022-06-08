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
                content={`Here, each regal is for one color and each color is inspired by a city in a corner of this world. Walking between regals is like a journey around a small world. When you go on a journey, everything becomes like your destination. Mood. Mood Even clothes. Regular means walking among the beauties of the whole world. So let\'s go regal`}
                color="exapmle"
                title={t("collection")}
              />
              <MediumCollection
                image1={"/Assets/images/6.jpg"}
                image2={"/Assets/images/7.jpg"}
                image3={"/Assets/images/10.jpg"}
                title={t("shop")}
                content={`This store is full of products that we have tried to make you feel better about your beauty. Shopping gives a person confidence and reduces anxiety. This will make you feel more relaxed, especially if this purchase is for beauty. What is your own beauty or giving beauty to others. So let\'s go to the store.,`}

             
              />
              <HardCollection
                image={"/Assets/images/9.jpg"}
                title={t("explore")}
                content={t("messageExplore")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
