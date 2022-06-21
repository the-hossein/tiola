import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../tools/loader/Loader";
import Blog from "./blogGet/Blog";
import { BASE_URL, GET_BLOGS } from "../../api/urls";

//stylesheet
import style from "./Blogs.module.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [preload, setPreload] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(BASE_URL+GET_BLOGS)
      .then((response) => {
        setBlogs(response.data.data);
        setPreload(false);
      });
  }, []);

  return (
    <div className={`${style.container} container mt-3 mb-3`}>
      <h2 className={style.blogTitle}>{t("blogs")}</h2>
      <div className="row justify-content-between">
        {preload ? (
        <Loader/>
        ) : (
          blogs.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              titleEn={blog.titleEn}
              image={blog.imageFile.filePath}
              body={blog.paragraphs}
              params={blog.id}
            />
          ))
        )}
</div>
    
    </div>
  );
};

export default Blogs;
