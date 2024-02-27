import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AuctionCard = () => {
  return (
    <div className="dash-tabs">
      <Tabs className="dash-tab-container">
        <TabList className="dash-tab-head">
          <Tab>Host Exhibition</Tab>
          <Tab>Ongoing Exhibition</Tab>
        </TabList>

        <TabPanel className="ex-bg">ss</TabPanel>
        <TabPanel className="ex-bg">ss</TabPanel>
      </Tabs>
    </div>
  );
};

export default AuctionCard;
