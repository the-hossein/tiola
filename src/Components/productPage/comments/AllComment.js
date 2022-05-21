import React, { useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Style from "./Comments.module.css";
import AddComment from "./AddComment";
import WriteComment from "./WriteComment";
import { useDispatch, useSelector } from "react-redux";
import { writeTrue } from "../../../redux/comment/commentActions";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false
});
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
      450: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  };

  return (
    <>
      {size < 600 && <AddComment />}

      <div className={`${Style.AllComment} mt-2`}>
        <OwlCarousel
          responsive={respons.responsive}
          margin={16}
          startPosition={10}
          autoWidth={size < 650 ? false : true}
          dir={"ltr"}
          mouseDrag={size > 650&&state.writeCm ? false : true}
          touchDrag={size > 650&&state.writeCm ? false : true}
        >
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          {size > 600 && <AddComment />}
        </OwlCarousel>
      </div>
    </>
  );
};

export default AllComment;
