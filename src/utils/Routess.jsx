import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../header/Navbar";
import NotFound from "../utils/NotFound";
import Footer from "../footer/Footer";
import ProductGrid from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import ItemsByCategory from '../components/ItemsByCategory'

function Routess() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductGrid/>}></Route>
        <Route path="/products/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products/category/:categoryId" element={<ItemsByCategory/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routess;
