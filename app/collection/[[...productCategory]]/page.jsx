"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Products/ProductCard";
import "@/components/Products/productPage.css"
import { Pagination } from "@mui/material";
import axios from 'axios'
import Loader from "@/components/Loader/Loader";

const page = ({ params }) => {
  let productCategory = params.productCategory;
  let productfilter = params.productfilter;
  if(productfilter==undefined){
    productfilter=" "
  }
  const [product, setproduct] = useState()
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/product/${productCategory}/${productfilter}`);
        const jsonData = await response.json();
        setproduct(jsonData);
        console.log(jsonData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error as well
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])



  return (
    <>
  
      <div className="page_title">
        Here is Our {productCategory} {productfilter} Fashion : Result-100
      </div>
    <hr/>
      <div className="product_page">
    
        <div className="products">
        
          {
            loading ? <Loader/> : (
            product.map((item)=>{
              // console.log(item.productDescription)
              return <ProductCard product={item} key={item._id}/>
            })
            )
          }
      
        </div>
      </div>

      <div className="pagination">

      <Pagination count={10} shape="rounded" color="primary" size="large" />
      </div>
    </>
  );
};

export default page;
