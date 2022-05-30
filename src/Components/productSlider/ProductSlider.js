import React from "react";
import Style from "./ProductSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

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
  
  return (
    <div className={Style.slider}>
      
      <Swiper
        navigation={arrowStatus}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          fontSize:"4rem", 
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
            <SwiperSlide key={item.src}>
              <Link href={`/product/${item.id}`}>
                <div>
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
