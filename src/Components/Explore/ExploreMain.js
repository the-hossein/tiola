import React, { useEffect, useState, useLayoutEffect, useReducer } from "react";
//fetch Data
import axios from "axios";
//scrolling
import InfiniteScroll from "react-infinite-scroll-component";
//Masonry
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import CircularProgress from "@mui/material/CircularProgress";

//style
import style from "./ExploreMain.module.css";
import Loader from "../../tools/loader/Loader";
import { height } from "@mui/system";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { query } from "../../redux/searchProduct/searchAction";
import { useTranslation } from "react-i18next";

const ExploreMain = ({ data }) => {
  const { t } = useTranslation();
  const [size, setSize] = useState(0);
  const [getItem, setGetItem] = useState(data.slice(0, 10));
  const searching = useSelector((state) => state.stateSearch);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.stateLang.lng);

  const search = window.location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  // bar
  var idSearching = params.get("search");
  console.log(data);
  const [targetSearch, setTargetSearch] = useState([]);

  useEffect(() => {
    // dispatch(query(data))

    // if(searching.items.length){
    //   setGetItem(searching.items)
    // }

    setTargetSearch(data.filter((item) => item.title.includes(idSearching)));
  }, []);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "15px",
    ...theme.typography.body2,
    padding: "0",
    cursor: "pointer",
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "fit-content",
    boxShadow: "none",
    border: ".25px solid",
    borderColor: "var(--lightGray-border)", 
  }));


  const fetchMoreData = () => {
    setGetItem(data.slice(0, getItem.length + 10));
  };

  const categoryScarf = data.filter(item => item.type === "scarf");
  const [scarfShow, setScarfShow] = useState(false);
  const scarfHandler = () => {
    setShawlShow(false);
    setHeadgearShow(false)
    setScarfShow(true);
    console.log(categoryScarf);
  }
  const categoryShawl = data.filter(item => item.type === "shawl");
  const [shawlShow, setShawlShow] = useState(false);
  const shawlHandler = () => {
    setHeadgearShow(false)
    setScarfShow(false);
    setShawlShow(true);
    console.log(categoryShawl);
  }
  const categoryHeadgear = data.filter(item => item.type === "headgear");
  const [headgearShow, setHeadgearShow] = useState(false);
  const headgearHandler = () => {
    setShawlShow(false);
    setScarfShow(false);
    setHeadgearShow(true);
    console.log(categoryHeadgear);
  }

  const showAllExplore = () => {
    setShawlShow(false);
    setScarfShow(false);
    setHeadgearShow(false);
  }

  return (
    <div className={style.explore}>
      <h1 onClick={showAllExplore}>{t("explore")}</h1>
      <div className={style.selectedCategory}>
        <div>
          <img src="/Assets/images/categoryScarf.jpg" alt="category"/>
          <span onClick={scarfHandler} className={lang === "fa" ? style.categoryFa : style.categoryEn }>{t("scarf")}</span>
        </div>
        <div>
          <img src="/Assets/images/categoryShwal.jpg" alt="boboland"/>
          <span onClick={shawlHandler} className={lang === "fa" ? style.categoryFa : style.categoryEn }>{t("shawl")}</span>
        </div>
        <div>
          <img src="/Assets/images/categoryHeadger.jpg" alt="boboland"/>
          <span onClick={headgearHandler} className={lang === "fa" ? style.categoryFa : style.categoryEn }>{t("headgear")}</span>
        </div>
      </div>
      <Box sx={{ width: "auto" }}>
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={getItem.length}
          next={fetchMoreData}
          hasMore={getItem.length === data.length ? false : true}
          endMessage=""
          loader={
            <div className="d-block text-center">
              <CircularProgress disableShrink />
            </div>
          }
        >
          {getItem.length > 0 && (
            <Masonry
              columns={size <= 480 ? 2 : size >= 980 ? 4 : 3}
              spacing={2}
              style={{margin: "0"}}
            >
              {targetSearch.length
                ? targetSearch.map((product) => (
                    <Item key={product.id}>
                      <a>
                        <Link href={`/product/${product.id}`}>
                          <div className={style.showProduct}>
                            <img
                              src={product.explorFile.filePath}
                              alt="product"
                              loading="lazy"
                            />
                            <p className={style.parag}>
                              {lang === "fa" ? product.title : product.titleEn}
                            </p>
                          </div>
                        </Link>
                      </a>
                    </Item>
                  ))
                : 
                scarfShow ? 
                categoryScarf.map(item => (
                    <Item key={item.id}>
                          <Link href={`/product/${item.id}`}>
                            <a>
                              <div className={style.showProduct}>
                                <img
                                  src={item.explorFile.filePath}
                                  alt="product"
                                />
                                <p className={style.parag}>
                                  {lang === "fa"
                                    ? item.title
                                    : item.titleEn}
                                </p>
                              </div>
                            </a>
                          </Link>
                        </Item>
                )):
                shawlShow ? 
                categoryShawl.map(item => (
                  <Item key={item.id}>
                        <Link href={`/product/${item.id}`}>
                          <a>
                            <div className={style.showProduct}>
                              <img
                                src={item.explorFile.filePath}
                                alt="product"
                              />
                              <p className={style.parag}>
                                {lang === "fa"
                                  ? item.title
                                  : item.titleEn}
                              </p>
                            </div>
                          </a>
                        </Link>
                      </Item>
                )): headgearShow ? categoryHeadgear.map(item => (
                  <Item key={item.id}>
                        <Link href={`/product/${item.id}`}>
                          <a>
                            <div className={style.showProduct}>
                              <img
                                src={item.explorFile.filePath}
                                alt="product"
                              />
                              <p className={style.parag}>
                                {lang === "fa"
                                  ? item.title
                                  : item.titleEn}
                              </p>
                            </div>
                          </a>
                        </Link>
                      </Item>
                ))
                  :getItem.map(
                    (product, index) =>
                      product.explorFile.confirmed && (
                        <Item key={product.id}>
                          <Link href={`/product/${product.id}`}>
                            <a>
                              <div className={style.showProduct}>
                                <img
                                  src={product.explorFile.filePath}
                                  alt="product"
                                />
                                <p className={style.parag}>
                                  {lang === "fa"
                                    ? product.title
                                    : product.titleEn}
                                </p>
                              </div>
                            </a>
                          </Link>
                        </Item>
                      )
                  )}
            </Masonry>
          )}
        </InfiniteScroll>
      </Box>
    </div>
  );
};

export default ExploreMain;
