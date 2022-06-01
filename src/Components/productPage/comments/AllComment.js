import React, { useEffect, useLayoutEffect, useState } from "react";
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



const AllComment = ({product}) => {
  const state = useSelector((state) => state.stateComment);
  const lang = useSelector(state => state.stateLang.lng);
  const [decorate, setDecorate] = useState("");
  const [size, setSize] = useState([0]);
  const [test, setTest] = useState(true);
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

  useEffect(()=> {
    lang === "en" ? setDecorate("ltr") : setDecorate("rtl");
    console.log("bobo");
    setTest(prevTest => !prevTest);
  }, [state])

  return (
    <>
      {size < 600 && <div><AddComment/></div>}
      <div className={`${Style.AllComment} row`}>
        {/* <div className="row"> */}
          <div className="col-12 col-md-12 ">
            { 
              test ?
                  (<Swiper
                  dir={"rtl"}
                  allowTouchMove={test}
                  showsPagination={true}
                  slidesPerView={size < 600 ? 1 : 3}
                  spaceBetween={15}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                        className="mySwiperComment"
                  > 
                  
                    {size > 601 &&
                      <SwiperSlide>
                        <AddComment />
                      </SwiperSlide>
                    }
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
                </Swiper>) : 
                    
                  (<Swiper
                  dir={"rtl"}
                  allowTouchMove={test}
                  noSwiping={true}
                  onlyExternal={true}
                  showsPagination={true}
                  slidesPerView={size < 600 ? 1 : 3}
                  spaceBetween={15}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                        className="mySwiperComment"
                  >
                    {size > 601 &&
                      <SwiperSlide>
                        <AddComment />
                      </SwiperSlide>
                    }
                    
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
                </Swiper>)
          
            }
          </div>
          <div className="col-12 col-md-4 p-1 ">
            
          </div>
        {/* </div> */}
        
      </div>
    </>
  );
};

export default AllComment;
