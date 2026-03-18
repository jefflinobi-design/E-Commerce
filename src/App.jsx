import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import { clearCart } from "./features/cart/cartSlice";

import "./App.css";
import Navbar from "./Components/Navbar";

function App() {

  // 🔍 Search
  const [search, setSearch] = useState("");

  // 🔐 Auth state
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  // 🔥 AUTO CLEAR CART WHEN LOGOUT
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(clearCart());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar setSearch={setSearch} />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;