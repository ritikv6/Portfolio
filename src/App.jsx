import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/Footer/Footer";
import Home from "./Home";
import Page1 from "./Page1";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
