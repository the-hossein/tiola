import React, { Fragment } from "react";
import Style from "./ProductSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
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
  radius,
  nameSet,
  border,
  title
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
        mousewheel={true}
        slidesPerView={5}
        spaceBetween={margin}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        scrollbar={{
          hide: true
        }}
        modules={[Scrollbar, Navigation, Mousewheel]}
        className={nameSet}
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
          <Fragment key={item.src}>
            <SwiperSlide >
              <Link href={`/product/${item.id}`}>
                <a>
                  <img
                    src={item.src}
                    alt="product"
                    className={`${Style.product} ${!border&&Style.border} ${title ? "simlarHover" : ""}`}
                    style={{ borderRadius: radius, height: heightImage }}
                  />
                </a>
              </Link>
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
