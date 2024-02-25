import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../header/AuthHeader";
import AuthFooter from "../footer/AuthFooter";

const ALayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </>
  );
};

export default ALayout;
