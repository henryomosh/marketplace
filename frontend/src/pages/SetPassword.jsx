import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slick from "../components/Slick";
import ProductList from "../components/ProductList";
import Routers from "../components/Routers";
import Footer from "../components/Footer";
import SetPasswordSection from "../components/SetPasswordSection";

function SetPassword() {
  return (
    <div>
      <NavBar />
      <SetPasswordSection />
      <Footer />
    </div>
  );
}
export default SetPassword;
