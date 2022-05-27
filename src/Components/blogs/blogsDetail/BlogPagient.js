import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";




const BlogPaginate = ( {blogDataProps, pageNum} ) => {
    const [blogData, setBlog] = useState([]);

    const [pageNumber, setPageNumber] = useState(1);
 
    // useEffect(() => {
    //   document.getElementById("animate").classList.add(style.transition);
    // }, [pageNumber]);
    const perPage = pageNum;
    const pageVisited = pageNumber * perPage;
    const displayCourse = blogDataProps.slice(pageVisited, pageVisited + perPage)
  
      .map((item) => {
        return (
          <>
            <div>
                <div>
                    image
                </div>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            </div>
          </>
        );
      });
    {
    }
    const chngePage = ({ selected }) => {
      setPageNumber(selected);
    //   const test = document.getElementsByClassName(style.transition);
    };
    const pageCount = Math.ceil(blogDataProps.length / perPage);
    return (
      <>
        <div id="animate" className={"row"}>
          {
            displayCourse
          }
        </div>
        <ReactPaginate
          previousLabel="صفحه قبلی"
          nextLabel="صفحه بعد"
          pageCount={pageCount}
          onPageChange={chngePage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          renderOnZeroPageCount={null}
        //   containerClassName={style.pagination}
        //   previousLinkClassName={style.prevbtn}
        //   nextLinkClassName={style.nextbtn}
        //   disabledClassName={style.disablebtn}
        //   activeClassName={style.PaginationActive}
        />
      </>
    );
  };
  
  export default BlogPaginate