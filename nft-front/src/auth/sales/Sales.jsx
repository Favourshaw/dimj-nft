import React from "react";
import HistoryTabs from "../history/HistoryTabs";

const Sales = () => {
  return (
    <div className="history dash-width">
      <div className="dash-title t-grad-dark">Sales History</div>
      <div className="dash-nav">
        <HistoryTabs />
      </div>
    </div>
  );
};

export default Sales;
