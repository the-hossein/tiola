import React from "react";
import Style from "./ProductSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link";
// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   // Client-side-only code
//   window.$ = window.jQuery = require("jquery");
// }

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false
// });
const ProductSlider = ({
  arrowStatus,
  images,
  slidesShow,
  margin,
  heightImage,
  mbItem,
  tbItem,
  radius
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
  console.log(images);
  // const prop = {
  //   items: slidesShow,
  //   className: "owl-theme",
  //   margin: margin,
  //   ltr: true,
  //   dots: false,
  //   lazyLoad: true,
  //   loop: loop,
  //   nav: arrowStatus,
  //   navClass: ["owl-prev", "owl-next"],
  //   responsive: {
  //     0: {
  //       items: mbItem
  //     },
  //     500: {
  //       items: tbItem
  //     },
  //     800: {
  //       items: slidesShow
  //     }
  //   }
  // };
  return (
    <div className={Style.slider}>
      {/* <OwlCarousel {...prop} mouseDrag={true} touchDrag={true}>
        {images.map((item) => (
          <>
            <Link href={`/product/${item.id}`}>
              <div key={item.id}>
                <img
                  src={item.src}
                  alt="product"
                  className={Style.product}
                  style={{ height: heightImage, borderRadius: borderRadius }}
                />
              </div>
            </Link>
          </>
        ))}
      </OwlCarousel> */}
      <Swiper
        navigation={arrowStatus}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        slidesPerView={5}
        spaceBetween={margin}
        grabCursor={true}
        dir="ltr"
        pagination={{
          clickable: true
        }}
        scrollbar={{
          hide: true
        }}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: mbItem
          },
          600: {
            slidesPerView: tbItem
          },
          1200: {
            slidesPerView: slidesShow
          }
        }}
      >
        {images.map((item) => (
          <>
            <SwiperSlide>
              <Link href={`/product/${item.id}`}>
                <div key={item.id}>
                  <img
                    src={item.src}
                    alt="product"
                    className={Style.product}
                    style={{ borderRadius: radius, height: heightImage }}
                  />
                </div>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
