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
      {size < 600 && (
        <div>
          <AddComment />
        </div>
      )}
      <div className={`${Style.AllComment} row m-0`}>
        <div className="col-12 col-md-12 p-0 ">
          <Swiper
            dir={"rtl"}
            allowTouchMove={false}
            showsPagination={false}
            slidesPerView={size < 600 ? 1 : 3}
            spaceBetween={15}
            grabCursor={true}
            pagination={{
              clickable: false
            }}
            modules={[]}
            className="mySwiperComment"
          >
            {size > 601 && (
              <SwiperSlide>
                <AddComment />
              </SwiperSlide>
            )}
            {!state.preLoad &&
              state.allComment.map((comment) => (
                <>
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
        <div className="col-12 col-md-4 p-1 "></div>
      </div>
    </>
  );
};

export default AllComment;
