"use client";
import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { GiPlainCircle } from "react-icons/gi";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Corousal from "@/components/Corousal/manualCorousal/Corousal";
import { SliderData } from "@/components/Corousal/manualCorousal/SliderData";
import { useStateContext } from "@/context/StateContext";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = ({ productSlug }) => {

  let qty = useSelector((state)=>state.product.qty);
  const [product, setproduct] = useState("");
  let dispatch = useDispatch();

  const [mainImg, setmainImg] = useState("");
  const [quantity, setquantity] = useState(1);
  let addProduct = () => {
    dispatch(addToCart(product));
    // onAdd(product, qty);
    console.log(product);
  };
  useEffect(() => {
    if (typeof document != undefined) {
      console.log("DOM Loaded");

      const container = document.querySelector(".product_display_image");
      const img = document.querySelector(".product_display_image img");
      container.addEventListener("mousemove", onZoom);
      container.addEventListener("mouseover", onZoom);
      container.addEventListener("mouseleave", offZoom);
      function onZoom(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        // console.log(`(${x},${y})`);
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.5)";
      }
      function offZoom(e) {
        img.style.transformOrigin = `center center`;
        img.style.transform = "scale(1)";
      }
    }
  }, []);
  let ChangeDisplayImage = (e) => {
    setmainImg(e.target.getAttribute("src"));
  };
  useEffect(() => {
    let functionFind = async () => {
      let product = await fetch(
        `http://localhost:8000/productSlug/${productSlug}`
      );
      let response = await product.json();
      console.log(response);
      setproduct(response[0]);
      setmainImg(response[0].productImage[0]);
    };
    functionFind();
  }, []);
  return (
    <>
      <div className="upperDiv">
        <div className="mainProductPage">
          <div className="product_images_grid">
            {product.productImage ? (
              <Corousal slides={product.productImage} />
            ) : (
              ""
            )}
            <div className="product_display_image">
              <img src={mainImg} alt="" />
            </div>
            <div className="product_images">
              {product.productImage
                ? product.productImage.map((item) => {
                    return (
                      <div className="product_img" key={item}>
                        <img onClick={ChangeDisplayImage} src={item} alt="" />
                      </div>
                    );
                  })
                : " "}
            </div>
          </div>
          <div className="product_detail">
            <div className="product_title">
              <h1>{product.productName}</h1>
            </div>
            <div className="product_color_picker">
              <IconButton
                aria-label="color"
                style={{
                  color: "rgb(255, 0, 0)",
                  background: "rgb(255, 0, 0)",
                }}
              >
                <GiPlainCircle />
              </IconButton>
              <IconButton
                aria-label="color"
                style={{ color: "rgb(255, 250, 0)" }}
              >
                <GiPlainCircle />
              </IconButton>
              <IconButton
                aria-label="color"
                style={{ color: "rgb(0, 0, 255)" }}
              >
                <GiPlainCircle />
              </IconButton>
              <IconButton
                aria-label="color"
                style={{ color: "rgb(153, 51, 255)" }}
              >
                <GiPlainCircle />
              </IconButton>
              <IconButton
                aria-label="color"
                style={{ color: "rgb(0, 204, 102)" }}
              >
                <GiPlainCircle />
              </IconButton>
            </div>
            <div className="product_size_pricker">
              <Button variant="outlined">S</Button>
              <Button variant="outlined">M</Button>
              <Button variant="outlined">L</Button>
              <Button variant="outlined">XL</Button>
              <Button variant="outlined">XXL</Button>
            </div>
            <div className="add_quantity_box">
              <Typography variant="h5" component="h3">
                Quantity :{" "}
              </Typography>
              <div className="add_quantity">
                {" "}
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  onClick={()=>{}}
                >
                  <AiOutlineMinus />
                </IconButton>
                <Typography variant="h5 " component="h4">
                  {qty}
                </Typography>
                <IconButton
                  aria-label="fingerprint"
                  color="secondary"
                  onClick={()=>{}}
                >
                  <AiOutlinePlus />
                </IconButton>
              </div>
            </div>
            <div className="pricing">
              <div className="typo">
                <Typography variant="h5" component="h3">
                  Price :{" "}
                </Typography>
              </div>
              <div className="original">
                <h5 style={{ textDecoration: "line-throuugh" }}>₹900</h5>
              </div>
              <div className="discounted">
                <h4>₹700</h4>
              </div>
            </div>

            <div className="add_buy_button">
              <Button
                variant="contained"
                color="secondary"
                onClick={addProduct}
              >
                ADD TO CART
              </Button>
              <Button variant="contained" color="secondary">
                ADD TO WISHLIST
              </Button>
            </div>
            <div className="discription_buttons">
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{product.productDescription}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Material Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Instruction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                    <li>the description</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
