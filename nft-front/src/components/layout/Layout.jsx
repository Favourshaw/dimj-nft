import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const HLayout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HLayout;
