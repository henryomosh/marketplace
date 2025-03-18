import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/mystyle.css";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import PasswordReset from "./pages/PasswordReset";
import SetPassword from "./pages/SetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/set/password" element={<SetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
