import React from "react";
import HistoryTabs from "./HistoryTabs";

const History = () => {
  return (
    <div className="history dash-width">
      <div className="dash-title t-grad-dark">Transaction History</div>
      <div className="dash-nav">
        <HistoryTabs />
      </div>
    </div>
  );
};

export default History;
