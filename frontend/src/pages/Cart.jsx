import { use, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useGetUserDetailsQuery } from "../redux/slice/auth/authService";
import NavBar from "../components/NavBar";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import { setCredentials } from "../redux/slice/auth/loginSlice";

export default function Cart() {
  // automatically authenticate user if token is found

  return (
    <div>
      <NavBar />
      <CartItem />
      <Footer />
    </div>
  );
}
