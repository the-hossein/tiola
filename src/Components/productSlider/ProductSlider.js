import React from "react";
import style from "./ProductSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow } from "./SampleNextArrow";
import { SamplePrevArrow } from "./SamplePrevArrow";
const ProductSlider = () => {
  const product = [
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },  {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },
  ];
  const sliderSettings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 527,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <Slider {...sliderSettings} className={style.sliderContainer}>
        {product.map((item) => (
          <>
            <img src={item.src} alt="product" className={style.product} />
          </>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
