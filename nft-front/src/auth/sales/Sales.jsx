import React from "react";
import SalesTab from "./SalesTab";
const Sales = () => {
  return (
    <div className="history dash-width">
      <div className="dash-title t-grad-dark">Sales History</div>
      <div className="dash-nav">
        <SalesTab />
      </div>
    </div>
  );
};

export default Sales;
