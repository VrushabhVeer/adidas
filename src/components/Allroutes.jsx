import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Shoes from "../pages/Shoes";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import OrderPlaced from "../pages/OrderPlaced";
import SingleMen from "../pages/SingleMen";
import SizeGuide from "../pages/SizeGuide";
import SingleWomen from "../pages/SingleWomen";
import SingleShoe from "../pages/SingleShoe";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/mensproduct/:product_id" element={<SingleMen />}/>
        <Route path="/womens" element={<Womens />} />
        <Route path="/womensproduct/:product_id" element={<SingleWomen />}/>
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/:product_id" element={<SingleShoe />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order_placed" element={<OrderPlaced />} />
        <Route path="/size_guide" element={<SizeGuide />} />
      </Routes>
    </>
  );
};

export default Allroutes;
