import React from "react";
import Collection from "../collection/Collection";
import HeroSection from "../heroSection/HeroSection";
import ProductSlider from "../productSlider/ProductSlider";
import style from "./Landing.module.css";
const Landing = () => {
    const product = [
        {
          src: "/Assets/images/1.jpg"
        },
        {
          src: "/Assets/images/1.jpg"
        },
        {
          src: "/Assets/images/1.jpg"
        },
        {
          src: "/Assets/images/1.jpg"
        },
        {
          src: "/Assets/images/1.jpg"
        },
        {
          src: "/Assets/images/1.jpg"
        }
      ];
  return (
    <div className={style.landing}>
      <HeroSection />
      <ProductSlider
        slidesShow={3}
        radius={0}
        images={product}
        arrowStatus={true}
        margin={0}
        mbItem={1}
        tbItem={2}
        heightImage={300}
      />
      <Collection />
    </div>
  );
};

export default Landing;
