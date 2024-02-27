import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HistoryTable from "./HistoryTable";

const HistoryTabs = () => {
  return (
    <div className="dash-tabs">
      <Tabs className="dash-tab-container">
        <TabList className="dash-tab-head">
          <Tab>All</Tab>
          <Tab>Deposit</Tab>
          <Tab>Mint</Tab>
          <Tab>Withdrawal</Tab>
          <Tab>Commission</Tab>
        </TabList>

        <TabPanel>
          <HistoryTable />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HistoryTabs;
