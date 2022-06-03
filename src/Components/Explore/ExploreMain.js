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
import { useSelector, useDispatch } from "react-redux";
import { query } from '../../redux/searchProduct/searchAction'

const ExploreMain = ({ data }) => {
  const [size, setSize] = useState(0);
  const [getItem, setGetItem] = useState({});
  const searching = useSelector(state => state.stateSearch);
  const dispatch = useDispatch();
  const lang =useSelector(state=>state.stateLang.lng)
  console.log(data);
  useEffect(() => {
    // dispatch(query(data))
    // setGetItem(data.slice(0, 10));
    if(searching.items.length){
      setGetItem(searching.items)
    }
    console.log(searching)
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
    setGetItem(data.slice(0, getItem.length + 10));
  };

  return (
    <div className={style.explore}>
      <Box sx={{ width: "auto" }}>
        <InfiniteScroll
        style={{overflow:'hidden'}}
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={searching.items.length===data.length?false:true}
          endMessage=""
          loader={<Loader/>}
        >
          {data.length > 0 && (
            <Masonry
              columns={size <= 480 ? 2 : size >= 980 ? 4 : 3}
              spacing={2}
            >
              {searching.items.map((product, index) => (
               product.imageFile1.confirmed&&

                  <Item key={product.id}>
                
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
