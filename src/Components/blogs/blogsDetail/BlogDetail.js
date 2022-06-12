import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, GET_BLOG } from "../../../api/urls";
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
  const [parag, setParag] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${GET_BLOG}?id=${id}`)
      .then((response) => {
        const data = response.data.data;
        console.log(data)
        setBlogTarget(data);
        setParag(JSON.parse(data[0].paragraphs))
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className={`'container-fluid' ${style.container}`}>
      <div>
        <img src={loading !== true && blogTarget[0].imageFile.filePath} />
        <div className={`col-12 ${style.imageHeader}`}>
          <a onClick={() => window.history.back()}>
            <ArrowLeftIcon sx={{ fontSize: "40pt" }} />
            <span>{t("blogs")}</span>
          </a>
        </div>
        <div className={lang === "fa" ? style.blogInfoEn : style.blogInfo}>
          <h1>{loading ? "loading" :lang === "fa" ? blogTarget[0].title : blogTarget[0].titleEn}</h1>
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
            <img className={style.imgBlog} src={loading === false && parag.Paragraphs[0].picpath } />
          </div>
          <div className={`col-12 col-md-6 col-lg-6 ${style.blogContent}`}>
            <h1>{loading ? "Loading..." : lang === "fa" ? blogTarget[0].title : blogTarget[0].titleEn }</h1>
            <p>{loading ? "Loading..." : lang === "fa" ? parag.Paragraphs[0].description : parag.Paragraphs[0].descriptionen }</p>
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
