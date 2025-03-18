import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Slick from "../components/Slick";
import ProductList from "../components/ProductList";
import Routers from "../components/Routers";
import Footer from "../components/Footer";
import PasswordResetSection from "../components/ResetPasswordSection";

function PasswordReset() {
  return (
    <div>
      <NavBar />
      <PasswordResetSection />
      <Footer />
    </div>
  );
}
export default PasswordReset;
