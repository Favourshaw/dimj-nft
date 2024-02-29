import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyAuction from "./MyAuction";
import OngoinAuc from "./OngoinAuc";
import MyBids from "./MyBids";

const AuctionCard = () => {
  return (
    <div className="dash-tabs">
      <Tabs className="dash-tab-container">
        <TabList className="dash-tab-head">
          <Tab>My Auctions</Tab>
          <Tab>Ongoing Auctions</Tab>
          <Tab>My Bids</Tab>
        </TabList>

        <TabPanel className="ex-bg">
          <MyAuction />
        </TabPanel>
        <TabPanel className="ex-bg">
          <OngoinAuc />
        </TabPanel>
        <TabPanel className="ex-bg">
          <MyBids />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AuctionCard;
