import Link from "next/link";
import React from "react";
import "./productCard.css";
import { Rating } from "@mui/material";
const ProductCard = ({product}) => {
  return (
    <>
      <div className="mainCard">
        <Link href={{
          pathname:`/product/${product.productSlug}`,
      
          }}>
          <div className="cardimg">
            <img
              src={product.productImage[0]}
              alt=""
            />
          </div>
          {/* <hr/> */}
          <div className="card_details">
            <div className="title">
              {" "}
              <h3>{product.productName.substring(0, 18)} ...</h3>{" "}
            </div>
            <div className="description">
              <p>{product.productDescription.substring(0,70)}...</p>
            </div>
            <div className="rating">
              <span><Rating name="read-only" value={4} readOnly /></span>
            </div>
            <div className="pricing">
              <span>₹{product.productPrice}</span>
            </div>
          </div>{" "}
        </Link>
        <div className="shop">
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
