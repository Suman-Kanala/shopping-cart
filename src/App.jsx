import React, { useState } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <main className="font-mono container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home title={"Home"} />} />
        <Route path="cart" element={<Cart title={"Cart"} />} />
      </Routes>
      <Footer />
    </main>
  );
};
export default App;
