import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../header/AuthHeader";
import AuthFooter from "../footer/AuthFooter";
import AuthSidebar from "../header/AuthSidebar";
import "../../assets/auth/css/dash.css";

const ALayout = () => {
  const [navClose, setNavClose] = useState(false);
  return (
    <>
      <AuthSidebar
        onCollapse={(navClose) => {
          setNavClose(navClose);
        }}
      />

      <div className={`dashboard ${navClose ? "dashboard-close" : ""}`}>
        <AuthHeader />
        <Outlet />
        <AuthFooter />
      </div>
    </>
  );
};

export default ALayout;
