import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, GET_TARGET_BLOG } from "../../../api/urls";
//stylesheet
import style from "./BlogsDetail.module.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const BlogDetail = ({data}) => {
  const { t } = useTranslation();
  // const params = useRouter();
  // const id = +params.query.blog;
  const lang = useSelector((state) => state.stateLang.lng);
  const [blogTarget, setBlogTarget] = useState({});
  const [parag, setParag] = useState(JSON.parse(data.paragraphs));
  const [loading, setLoading] = useState(false);

  return (
    <div className={`'container-fluid' ${style.container}`}>
      <div>
        <img src={loading !== true && data.imageFile.filePath} />
        <div className={`col-12 ${style.imageHeader}`}>
          <a onClick={() => window.history.back()}>
            <ArrowLeftIcon sx={{ fontSize: "40pt" }} />
            <span>{t("blogs")}</span>
          </a>
        </div>
        <div className={lang === "fa" ? style.blogInfoEn : style.blogInfo}>
          <h1>{loading ? "loading" :lang === "fa" ? data.title : data.titleEn}</h1>
          <p>{!loading && `${data.user.name} ${data.user.family}`}</p>
        </div>
      </div>
      <div className="container">
        {/* <BlogPaginate blogDataProps={blogs} pageNum={2}  /> */}
        
          {
          parag.Paragraphs.map((item, index)=> (
            <>
            <div
              className={`row align-items-center justify-content-between ${index % 2 === 0 && "flex-row-reverse" } ${style.blogMain}`}
            >
              <div
                className={`col-12 col-md-6 col-lg-5 ${style.headerContainer}`}
              >
                <img className={style.imgBlog} src={loading === false && item.picpath } />
              </div>
              <div className={`col-12 col-md-6 col-lg-6 ${style.blogContent}`}>
                <h2>{loading ? "Loading..." : lang === "fa" ? item.title : item.titleen }</h2>
                <p className={lang === "fa" && style.paragraphFa} >{loading ? "Loading..." : lang === "fa" ? item.description : item.descriptionen}</p>
              </div>
            </div>
            </>
          ))
        }
      </div>
    </div>
  );
};

export default BlogDetail;
