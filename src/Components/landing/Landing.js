import React from "react";
import Collection from "../collection/Collection";
import HeroSection from "../heroSection/HeroSection";
import ProductSlider from "../productSlider/ProductSlider";
import style from "./Landing.module.css";
const Landing = ({ product,explore }) => {
  console.log(explore)
  const images = [];
  var itm;
  product.map((item) => {
    if (item.confirmed===true) {
      itm = item.filePath;
    }
    images.push({ src: itm, id: item.id });
  });
  return (
    <div className={style.landing}>
      <HeroSection />
      <ProductSlider
        slidesShow={2.4}
        radius={0}
        images={images}
        arrowStatus={true}
        margin={0}
        mbItem={1}
        tbItem={2}
        heightImage={280}
        nameSet={"homeSwiper"}
      />
      <Collection explore={explore}/>
    </div>
  );
};

export default Landing;
