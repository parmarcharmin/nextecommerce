"use client";

import React, { useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./cart.css";
import { ImCross } from "react-icons/im";
import { BsBoxArrowLeft } from "react-icons/bs";
import Items from "./Items";
import { useStateContext } from "@/context/StateContext";

const Cart = () => {
  let {cartItems} = useStateContext();

 let {qty , incQty , decQty , onAdd} = useStateContext();
  let openCart = () => {
    let cart = document.querySelector(".cart_sidebar");
    cart.classList.add("active");
    console.log(document.querySelector(".blur-container"));
  };
  let CloseCart = () => {
    document.querySelector(".cart_sidebar").classList.remove("active");
  };


  return (
    <>
      <div className="mainSide">
        <div className="cart">
          <div className="logo_container">
            <button className="cart_logo" onClick={openCart}>
              <HiOutlineShoppingBag />
            </button>
          </div>
          <div className="cart_items">
            <span className="cart_item_quantity">1</span>
          </div>
        </div>

        <div className="cart_sidebar">
          <div className="headBox">
            <button className="" onClick={CloseCart}>
              <BsBoxArrowLeft style={{ color: "#000" }} />
            </button>

            <div className="cart_title">
              <h2>Your Cart</h2>
            </div>
          </div>
          <hr />
          <div className="cartitems">


            {cartItems.map((item)=>{
              return <Items product={item}/>
            })}
          </div>
          <div className="checkout">
            <button>Checkout</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
