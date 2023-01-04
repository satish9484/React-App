import React from "react";

import SingleProduct from "../product/SingleProduct";
import { useGetProductsPageQuery } from "../product/ProductAPI";
import { useSelector, useDispatch } from "react-redux";
import {
  changePageNumber,
  selectAll,
  currentPage,
  setDisplayPageNumber,
} from "../product/ProductSlicer";

import { useState } from "react";



const NavigationPages = () => {

  const navigationPages = useSelector(selectAll);
  const page_1 = useSelector(currentPage);

  
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(page_1);
  const [initialPage, setInitialPage] = useState({
    firstPage: 1,
    middlePage: 2,
    lastPage: 3,
  });
 


  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsPageQuery(page);

  
  const styleBefor="disabled:opacity-75 disabled:bg-slate-100 disabled:text-opacity-75 page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800hover:text-white hover:bg-blue-600 focus:shadow-none"
  const newClassName=" bg-blue-600 disabled:opacity-75 disabled:bg-slate-100 disabled:text-opacity-75 page-link text-xl rounded-md text-gray-800 text-white py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none"




 

  
    
    
  const fp = document.getElementById("firstPage")
  const mp = document.getElementById("middlePage")
  const lp = document.getElementById("lastPage")
    
 const changeStyle = (page) => {
  
     if(page === navigationPages.firstPage){
     fp.className = newClassName
    mp.className = styleBefor
    lp.className = styleBefor  
    console.log("from 1");
    
    }

    if(page === navigationPages.middlePage){
    
      fp.className = styleBefor;
       mp.className = newClassName
       lp.className = styleBefor
       console.log("form 2")
       
    }

    if(page === navigationPages.lastPage){
     fp.className = styleBefor
     mp.className = styleBefor
     lp.className = newClassName
     console.log("from 3");

    }
    

  }
  



  
  

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center itmes-center " role="status">
        <svg
          className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (isSuccess) {
    content = <SingleProduct AllProducts={products} />;
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  }

  const handleNext = () => {
    setInitialPage({
      ...initialPage,
      firstPage: initialPage.firstPage + 1,
      middlePage: initialPage.middlePage + 1,
      lastPage: initialPage.lastPage + 1,
    });
    dispatch(changePageNumber(initialPage));
    console.log("From Next Page");
   
  };

  const handlePrevious =  () => {
    setInitialPage({
      ...initialPage,
      firstPage: initialPage.firstPage - 1,
      middlePage: initialPage.middlePage - 1,
      lastPage: initialPage.lastPage - 1,
    });
      dispatch(changePageNumber(initialPage));
      console.log("From Next Page");
  };

  const handleFirstPage = () => {
    console.log("from 1");
    setPage(navigationPages.firstPage);
     dispatch(setDisplayPageNumber(navigationPages.firstPage));
    changeStyle(navigationPages.firstPage)
   
  };

  const handleMiddlePage =  () => {
    setPage(navigationPages.middlePage);
     dispatch(setDisplayPageNumber(navigationPages.middlePage))
  changeStyle(navigationPages.middlePage)
    
  };

  const handleLastPage =  () => {
   
    setPage(navigationPages.lastPage);
      dispatch(setDisplayPageNumber(navigationPages.lastPage))
    changeStyle(navigationPages.lastPage)
    
  };

  return (
    <>
      <div className="flex justify-center mt-2">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none gap-2">
            <li className="page-item disabled">
              <button
                onClick={handlePrevious}
                className="disabled:opacity-75 font-bold disabled:font-thin disabled:bg-slate-100 disabled:text-opacity-75 page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800hover:text-white hover:bg-blue-600 focus:shadow-none"
                disabled={navigationPages.firstPage === 1}
              >
                Privious
              </button>
            </li>

            <li className="page-item">
              <button
                id="firstPage"
                onClick={handleFirstPage}
                className={`${styleBefor} bg-blue-600`}
              >
                {navigationPages.firstPage}
              </button>
            </li>

            <li className="page-item">
              <button
                id="middlePage"
                onClick={handleMiddlePage}
                className={styleBefor}
              >
                {navigationPages.middlePage}
              </button>
            </li>

            <li className="page-item">
              <button
                id="lastPage"
                onClick={handleLastPage}
                className={styleBefor}
              >
                {navigationPages.lastPage}
              </button>
            </li>
            <li className="page-item">
              <button
                onClick={handleNext}
                className="disabled:opacity-75 font-bold disabled:font-thin disabled:bg-slate-100 disabled:text-opacity-75 page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800hover:text-white hover:bg-blue-600 focus:shadow-none"
                disabled={navigationPages.lastPage === 10}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {content}
    </>
  );
};

export default NavigationPages;
