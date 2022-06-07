import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
//stylesheet
import style from "./BlogsDetail.module.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { t } = useTranslation();
  const params = useRouter();
  const id = +params.query.blog;
  const lang = useSelector((state) => state.stateLang.lng);
  const [blogTarget, setBlogTarget] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;
        setBlogTarget(data.filter((blog) => blog.id === id));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [blogTarget]);

  // console.log(blogTarget)
  // console.log(blogs);

  return (
    <div className={`'container-fluid' ${style.container}`}>
      <div>
        <img src="/Assets/images/2.jpeg" />
        <div className={`col-12 ${style.imageHeader}`}>
          <a onClick={() => window.history.back()}>
            <ArrowLeftIcon sx={{ fontSize: "40pt" }} />
            <span>{t("blogs")}</span>
          </a>
        </div>
        <div className={lang === "fa" ? style.blogInfoEn : style.blogInfo}>
          <h1>Blog NO 1</h1>
          <p>Lorem ipsum dolor </p>
        </div>
      </div>
      <div className="container">
        {/* <BlogPaginate blogDataProps={blogs} pageNum={2}  /> */}
        <div
          className={`row align-items-center justify-content-space-between ${style.blogMain}`}
        >
          <div
            className={`col-12 col-md-6 col-lg-5 ${style.headerContainer}`}
          >
            <img className={style.imgBlog} src="/Assets/images/3.jpeg"/>
          </div>
          <div className={`col-12 col-md-6 col-lg-6 ${style.blogContent}`}>
            <h1>{blogTarget.length ? blogTarget[0].title : "Loading..."}</h1>
            <p>{blogTarget.length ? blogTarget[0].body : "Loading..."}</p>
          </div>
        </div>
        <div
          className={`row align-items-center flex-row-reverse justify-content-space-between ${style.blogMain}`}
        >
          <div
            className={`col-12 col-md-6 col-lg-5 ${style.headerContainer}`}
          >
            <img className={style.imgBlog} src="/Assets/images/3.jpeg"/>
          </div>
          <div className={`col-12 col-md-6 col-lg-6 ${style.blogContent}`}>
            <h1>{blogTarget.length ? blogTarget[0].title : "Loading..."}</h1>
            <p>{blogTarget.length ? blogTarget[0].body : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
