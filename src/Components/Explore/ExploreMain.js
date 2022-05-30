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

//style
import style from "./ExploreMain.module.css";
import Loader from "../../tools/loader/Loader";
import { height } from "@mui/system";
import Link from "next/link";
import { useSelector } from "react-redux";

const ExploreMain = ({ data }) => {
  const [size, setSize] = useState(0);

  const [getItem, setGetItem] = useState({});
const lang =useSelector(state=>state.stateLang.lng)
  console.log(data);
  useEffect(() => {
    setGetItem(data.slice(0, 20));
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
    height: "fit-content"
  }));

  const fetchMoreData = () => {
    setGetItem(data.slice(0, getItem.length + 20));
  };

  return (
    <div className={style.explore}>
      <Box sx={{ width: "auto" }}>
        <InfiniteScroll
        style={{overflow:'hidden'}}
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={getItem.length===data.length?false:true}
          endMessage=""
          loader={<Loader/>}
        >
          {getItem.length > 0 && (
            <Masonry
              columns={size <= 480 ? 2 : size >= 980 ? 4 : 3}
              spacing={2}
            >
              {getItem.map((product, index) => (
                <Item key={index}>
                <Link href={`/product/${product.id}`}>
                <div className={style.showProduct}>
                    <img src={product.imageFile1.filePath} alt="product" />
                    <p className={style.parag}>{lang==="fa"?product.title:product.titleEn}</p>
                  </div>
                </Link>
                </Item>
              ))}
            </Masonry>
          )}
        </InfiniteScroll>
      </Box>
    </div>
  );
};

export default ExploreMain;
