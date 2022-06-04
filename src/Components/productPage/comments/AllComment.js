import React, { useEffect, useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import Style from "./Comments.module.css";
import AddComment from "./AddComment";
import WriteComment from "./WriteComment";
import { useDispatch, useSelector } from "react-redux";
import {
  writeTrue,
  getAllComment
} from "../../../redux/comment/commentActions";
import { useRouter } from "next/router";

//swiper lib
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

const AllComment = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateComment);
  const lang = useSelector((state) => state.stateLang.lng);
  // const allComment = useSelector(state => state.stateComment.allComment)
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

  useEffect(() => {
    lang === "en" ? setDecorate("ltr") : setDecorate("rtl");
    console.log(router.query.productname);
    setTest((prevTest) => !prevTest);
    dispatch(getAllComment(router.query.productname));
  }, []);

  return (
    <>
      {size < 686 && (
        <div className={`${Style.boboComent}`}>
          <AddComment />
        </div>
      )}
      <div className={`${Style.AllComment} row m-0`}>
        <div className="col-12 col-md-12 p-0 " >
          <div className="row justify-content-between align-items-center">
              {size > 685 && (
              <div className={`${!state.writeCm ? 'col-md-2 col-sm-3 col-lg-5' : 'col-md-6 col-sm-6'}`}>
                <div className={Style.firstChild}>
                  <AddComment />
                </div>  

            </div>
              )}
            <div className={size > 685 ? !state.writeCm ? 'col-12 col-md-9 col-sm-8 col-lg-7' : 'col-12 col-md-6 col-sm-6': "col-12"}>
            <Swiper
            dir={"rtl"}
            showsPagination={false}
            slidesPerView={size < 500 ? 1 :size < 780 ? 1.5 : !state.writeCm ? 2 : 1.5 }
            spaceBetween={15}
            grabCursor={true}
            pagination={{
              clickable: false
            }}
            modules={[]}
            className="mySwiperComment popo"
            >
            {!state.preLoad &&
              state.allComment.map((comment, index) => (
                <>
                  <SwiperSlide key={index}>
                    <Comment
                      userName={`${comment.name}  ${comment.family}`}
                      score={comment.score}
                      commentText={comment.commentText}
                    />
                  </SwiperSlide>
                  <SwiperSlide key={comment.name}>
                    <Comment
                      userName={`${comment.name}  ${comment.family}`}
                      score={comment.score}
                      commentText={comment.commentText}
                    />
                  </SwiperSlide>
                  <SwiperSlide key={comment.name}>
                    <Comment
                      userName={`${comment.name}  ${comment.family}`}
                      score={comment.score}
                      commentText={comment.commentText}
                    />
                  </SwiperSlide>
                  <SwiperSlide key={comment.name}>
                    <Comment
                      userName={`${comment.name}  ${comment.family}`}
                      score={comment.score}
                      commentText={comment.commentText}
                    />
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </div>

          </div>
          
            
            
        </div>
        <div className="col-12 col-md-4 p-1 "></div>
      </div>
    </>
  );
};

export default AllComment;
