import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HardCollection from "../../tools/allCollections/hardCollection/HardCollection";
import MediumCollection from "../../tools/allCollections/mediumCollection/MediumCollection";
import Simplcollection from "../../tools/allCollections/simpleCollection/Simplcollection";
import style from "./Collection.module.css";
const Collection = ({ dir }) => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.stateLang.lng);
  return (
    <>
      <section>
        <div className={`${style.landingCategory}`}>
          <div className="row justify-content-center m-0">
            <div className="col-lg-12 col-md-12 col-11 p-0">
              <Simplcollection
                image1="/Assets/images/4.jpg"
                image2="/Assets/images/10.jpg"
                content={lang==="fa"?
                "تیولا رگال‌های مختلفی دارد که هر رگال مخصوص یک رنگ است. هر کدام از مدل‌ها ویژگی خاصی دارد. با رگال گردی می‌توانید بهترین انتخاب خودتان و داشته باشید. "
                :
                `Tiola has different regals\, each regalia is specific to one color. Each model has a special feature. You can have your best choice with Regal Gerdi.`}
                color="exapmle"
                title={t("collection")}
              />
              <MediumCollection
                image1={"/Assets/images/6.jpg"}
                image2={"/Assets/images/7.jpg"}
                image3={"/Assets/images/10.jpg"}
                title={t("shop")}
                content={
                  lang === "fa"
                    ? `فروشگاه تیولا پر از مدل‌های متنوعی است که با هر سلیقه‌ای می‌توانید از بین آن‌ها انتخاب کنید. هر مدل ویژگی منحصر به فرد خودش را دارد. اگر دنبال یک مدل خاص هستید\، می‌توانید به فروشگاه تیولا بروید و بهترین انتخاب را داشته باشید.`
                    : `Tiola store is full of various models that you can choose from with any taste. Each model has its own unique feature. If you are looking for a special model\, you can go to Tiola store and have the best choice.`
                }
              />
              <HardCollection
                image={"/Assets/images/9.jpg"}
                title={t("explore")}
                content={
                  lang === 'fa' 
                    ? `ویترین پر از مدل‌های متنوع است. اگر انتخاب طرح دلخواه برایتان سخت است. پیشنهاد می‌کنیم به ویترین تیولا بروید و از بین طرح‌های مختلف\، طرح مناسب و با سلیقه خودتان پیدا کنید.`
                    : `The explore is full of various models. If it is difficult for you to choose the desired design. We suggest you go to the Tiola explore and find a suitable and tasteful design among the various designs.`
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
