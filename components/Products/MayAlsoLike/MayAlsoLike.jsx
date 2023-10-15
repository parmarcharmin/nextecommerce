import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard";
import "./mayalsolike.css";
import { Typography } from "@mui/material";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

let product = {
  _id: {
    $oid: "64dcc3c09b285c1b49606e07",
  },
  productRating: 0,
  productImage: [
    "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/9/i/f/l-women-printed-viscose-rayon-straight-kurta-kpf-original-imagqjezgm2ubu4c.jpeg?q=70",
    "https://www.fabfunda.com/product-img/Galaxi-Cotton-kurti-1608965039.jpeg",
    "https://ahika.in/cdn/shop/articles/1_1296x_91a97c0e-35db-4bc9-8fd6-5948ed7436f2.jpg?v=1649144160",
    "https://peachmode.com/cdn/shop/products/red-casual-wear-floral-printed-heavy-silk-long-kurti-peachmode-1.jpg?v=1669020655",
    "https://peachmode.com/cdn/shop/products/red-casual-wear-floral-printed-heavy-silk-long-kurti-peachmode-2.jpg?v=1669020657",
  ],
  productCategoryID: "64d28b474f9e44d485e045a3",
  productName: " Fundah Fashion Women Fit And Flare Light Blue Dress",
  productDescription:
    "Pattern Is Printed. Style Code Is Sys-9115. Type Is Fit And Flare. Length Is Above Knee/mid Thigh Length. Color Is Light Blue.",
  productPrice: 800,
  productSlug: "fundah-fashion-women-fit-and-flare-light-blue-dress",
  __v: 0,
  productCategory: "women",
};

const MayAlsoLike = () => {
  return (
    <>      <Typography variant="h3" component={"h2"} className="text-center flex justify-center">You May Also Like</Typography>
    <div className="p-4 flex justify-center">
      <Carousel
        autoPlay={true}
        responsive={responsive}
        transitionDuration={600}
        shouldResetAutoplay={true}
        rewindWithAnimation={true}
        rewind={true}
      >
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </Carousel>
    </div></>

  );
};

export default MayAlsoLike;
