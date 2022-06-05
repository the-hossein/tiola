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
        <div className="col-12 col-md-12 p-0" >
          <div className="row justify-content-between align-items-center">
              {size > 685 && (
              <div className={`${!state.writeCm ? 'col-12  col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3' : 'col-md-6 col-sm-5'}`}>
                <div className={Style.firstChild}>
                  <AddComment />
                </div>
            </div>
              )}
            <div className={size > 685 ? !state.writeCm ? 'col-9 col-sm-8 col-md-9 col-lg-8 col-xl-9 col-xxl-9' : 'col-12 col-md-6 col-sm-5': "col-12"}>
            <Swiper
            dir={"rtl"}
            showsPagination={false}
            slidesPerView={!state.writeCm && size > 900 ? 3 : !state.writeCm && size > 680 ? 2 : state.writeCm && size > 680 ? 1.2 : 1.8}
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
