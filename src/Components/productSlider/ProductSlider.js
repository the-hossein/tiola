import React from "react";
import Style from "./ProductSlider.module.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false
});
const ProductSlider = ({
  arrowStatus,
  images,
  slidesShow,
  margin,
  heightImage,
  borderRadius,
  mbItem,
  tbItem
}) => {
  //   const sliderSettings = {
  //     dots: false,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //     speed: 2000,
  //     // lazyLoad: 'ondemand'
  //     lazyLoad: true,
  //     margin: margin,
  //     slidesToShow: slidesShow,
  //     slidesToScroll: 1,
  //     arrows: arrowStatus,
  //     responsive: [
  //       {
  //         breakpoint: 527,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   };
  //   return (
  //     <section>
  //       <Slider {...sliderSettings} className={style.sliderContainer}>
  //         {images.map((item) => (
  //           <>
  //             <img src={item.src} alt="product" className={style.product} />
  //           </>
  //         ))}
  //       </Slider>
  //     </section>
  //   );
  // };

  const prop = {
    items: slidesShow,
    className: "owl-theme",
    margin: margin,
    ltr: true,
    dots: false,
    lazyLoad: true,
    loop: true,
    nav: arrowStatus,
    navClass: ["owl-prev", "owl-next"],
    responsive: {
      0: {
        items: mbItem
      },
      500: {
        items: tbItem
      },
      800: {
        items: slidesShow
      }
    }
  };
  return (
    <div className={Style.slider}>
      <OwlCarousel {...prop}  showThumbs={true}>
        {images.map((item) => (
          <>
            <div key={item.id}>
              <img
                src={item.src}
                alt="product"
                className={Style.product}
                style={{ height: heightImage, borderRadius: borderRadius }}
              />
            </div>
          </>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ProductSlider;
