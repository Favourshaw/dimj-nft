import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Ongoing from "./Ongoing";
import Host from "./Host";

const ExhibitionCard = () => {
  return (
    <div className="dash-tabs">
      <Tabs className="dash-tab-container">
        <TabList className="dash-tab-head">
          <Tab>Host Exhibition</Tab>
          <Tab>Ongoing Exhibition</Tab>
        </TabList>

        <TabPanel className="ex-bg">
          <Host />
        </TabPanel>
        <TabPanel className="ex-bg">
          <Ongoing />
          <Ongoing />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ExhibitionCard;
