"use client"
import React, { useEffect } from 'react'
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./cart.css";
import { ImCross } from "react-icons/im";
import {BsBoxArrowLeft} from "react-icons/bs"
const Items = ({product}) => {
  let {cartItems} = useStateContext();
  useEffect(() => {
  
    console.log("cart : ",product)
    
    }, [])
 let {qty , incQty , decQty , onAdd, onRemove} = useStateContext();
  return (
    <div className="item">
    <div className="first-half">
      <img
        src={product.productImage[0]}
        alt=""
        srcSet=""
      />
    </div>
    <div className="second-half">
    <div className="product_details">
    <div className="title">{product.productName.substring(0,19  )}....</div>
    <div className="description">{product.productDescription.substring(0,36)}</div>
    </div>
    <div className="addQuantities">
      <button>
        <AiFillMinusCircle  onClick={onRemove(product)} />
      </button>
      <span>{product.quantity}</span>
      <button>
        <AiFillPlusCircle onClick={onAdd(product,1)}/>
      </button>
    </div>
    </div>
  </div>
  )
}

export default Items