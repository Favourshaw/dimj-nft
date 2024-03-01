import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../assets/auth/css/dash.css";
import AuthHead from "../../auth/authentication/AuthHead";

const ALayout = () => {
  return (
    <>
      <AuthHead />

      <Outlet />
    </>
  );
};

export default ALayout;
