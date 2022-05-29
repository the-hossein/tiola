import React, { useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import Style from "./Comments.module.css";
import AddComment from "./AddComment";
import WriteComment from "./WriteComment";
import { useDispatch, useSelector } from "react-redux";
import { writeTrue } from "../../../redux/comment/commentActions";


//swiper lib
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";



const AllComment = () => {
  const state = useSelector((state) => state.stateComment);
  const [size, setSize] = useState([0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const respons = {
    responsive: {
      0: {
        items: 1
      },
      560: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  };

  return (
    <>
      {/* {size < 600 && <AddComment />} */}
      <div className={`${Style.AllComment} row`}>
        {/* <div className="row"> */}
          <div className="col-12 col-md-6 p-1">
              <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        origin: "left center",
                        translate: ["-5%", 0, -200],
                        rotate: [0, 100, 0],
                      },
                      next: {
                        origin: "right center",
                        translate: ["5%", 0, -200],
                        rotate: [0, -100, 0],
                      },
                    }}
                    modules={[EffectCreative, Pagination]}
                    className="mySwiperComment"
              >
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                    <SwiperSlide> 
                        <Comment />
                    </SwiperSlide>
                </Swiper>
          </div>
          <div className="col-12 col-md-6 p-1">
            <AddComment />
          </div>
        {/* </div> */}
        
      </div>
    </>
  );
};

export default AllComment;
