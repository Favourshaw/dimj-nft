import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExhibitionCard from "./ExhibitionCards";
import SideSalesCard from "../../components/cards/SideSalesCard";
import SideTransCard from "../../components/cards/SideTransCard";

const Exhibition = () => {
  return (
    <div className="history dash-width">
      <div className="dash-title t-grad-dark">Exhibition</div>
      <div className="dash-nav">
        <div className="dash-container">
          <div className="dash-card-container">
            <ExhibitionCard />
          </div>
          <div className="dash-trans">
            <SideTransCard />
            <SideSalesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
