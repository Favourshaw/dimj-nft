import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../header/AuthHeader";
import AuthFooter from "../footer/AuthFooter";
import AuthSidebar from "../header/AuthSidebar";
import "../../assets/auth/css/dash.css";

const DashLayout = () => {
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
        <div className="dash-height">
          <Outlet />
        </div>
        <AuthFooter />
      </div>
    </>
  );
};

export default DashLayout;
