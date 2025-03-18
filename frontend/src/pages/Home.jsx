import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slick from "../components/Slick";
import ProductList from "../components/ProductList";
import Routers from "../components/Routers";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <NavBar />
      <Slick />
      <ProductList />
      <Routers />
      <Footer />
    </div>
  );
}
export default Home;
