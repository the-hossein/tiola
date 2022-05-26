import React, { useEffect, useState, useLayoutEffect, useReducer } from 'react';
//fetch Data
import axios from 'axios';
//scrolling
import InfiniteScroll from "react-infinite-scroll-component";
//Masonry
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

//style
import style from './ExploreMain.module.css';



const ExploreMain = () => {

  const productsFake = [
    {
        src: "/Assets/images/1.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/3.jpeg"
  },
  {
    src: "/Assets/images/2.jpeg"
  },
  {
    src: "/Assets/images/4.jpeg"
},
{
  src: "/Assets/images/2.jpeg"
},
{
  src: "/Assets/images/1.jpeg"
},
{
src: "/Assets/images/3.jpeg"
},
{
  src: "/Assets/images/2.jpeg"
},
{
src: "/Assets/images/4.jpeg"
},
{
  src: "/Assets/images/2.jpeg"
},
{
src: "/Assets/images/3.jpeg"
},
{
  src: "/Assets/images/1.jpeg"
},
{
src: "/Assets/images/3.jpeg"
},
{
  src: "/Assets/images/5.jpeg"
},
{
src: "/Assets/images/3.jpeg"
},
{
  src: "/Assets/images/1.jpeg"
},
{
src: "/Assets/images/3.jpeg"
},

    {
      src: "/Assets/images/4.jpeg"
    },
    {
      src: "/Assets/images/1.jpeg"
    },
    {
      src: "/Assets/images/2.jpeg"
    },
    {
      src: "/Assets/images/5.jpeg"
    },
    {
      src: "/Assets/images/3.jpeg"
    },
    {
      src: "/Assets/images/1.jpeg"
    },
    {
      src: "/Assets/images/3.jpeg"
    },
    {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/1.jpeg"
      },
      {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },
      {
        src: "/Assets/images/1.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },
      {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/6.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/1.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },
      {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/5.jpeg"
      },
      {
        src: "/Assets/images/2.jpeg"
      },
      {
        src: "/Assets/images/3.jpeg"
      },
      {
        src: "/Assets/images/4.jpeg"
      },
      {
        src: "/Assets/images/1.jpeg"
      },
  ];

    const [size, setSize] = useState(0);
    
    const [getItem, setGetItem] = useState({items:[],hasMore:true});
    
    const [productsApi, setProductsApi] = useState();
    
    useEffect(()=> {
      //get product with api
        // axios.get('https://fakestoreapi.com/products')
        // .then(response => {
        //   setProductsApi(response.data);
        //   setGetItem({items:response.data.splice(0,10),hasMore:true});
        // })
        // .catch(err => console.log(err));

        //product fake
        setGetItem({hasMore:true, items: productsFake.splice(0,10)});
        
      }, []);
    
    // const fakeItem = [...productsApi,...productsApi,...productsApi,...productsApi,...productsApi];
    
    useLayoutEffect(()=> {
        const updateSize = () => {
                setSize([window.innerWidth]);
            };
            window.addEventListener("resize", updateSize);
            updateSize();
            console.log(size);
        return () => {
            window.removeEventListener('resize', updateSize);
        }
    }, [])
    

    
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: '#1A2027',
      borderRadius: "15px",
      ...theme.typography.body2,
      padding: '0',
      cursor: "pointer",
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "fit-content",
    }));


    const fetchMoreData = () => {
        if (getItem.items.length === 50) {
          setGetItem({...getItem, hasMore: false });
          return;
        }
        setTimeout(() => {
            setGetItem({...getItem, items: productsFake.splice(0, getItem.items.length + 10)})
        }, 500);
      };

      console.log(productsFake)

    return (
        <div className={style.explore}>
            {
              getItem.items.length &&
              <Box sx={{ width: "auto", minHeight: 393 }}>
                <InfiniteScroll
                  dataLength={getItem.items}
                  next={fetchMoreData}
                  hasMore={getItem.hasMore}
                  loader={<h4 style={{textAlign: "center"}}>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>finish.</b>
                    </p>}
                >
                    <Masonry columns={size <= 480 ? 2 : size >= 980 ? 4 : 3 } spacing={2}>
                          {getItem.items.map((itemPic, index) => (
                            <Item key={index}>
                              <div className={style.showProduct} >
                                  <img src={itemPic.src} alt='product' />
                                  <p className={style.parag}>lorem</p>
                              </div>
                            </Item>
                          ))}
                    </Masonry>
                </InfiniteScroll>
            </Box>}
        </div>
    );
};

export default ExploreMain;


