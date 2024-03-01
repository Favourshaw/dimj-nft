import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PagBtn from "../../components/cards/PagBtn";
import SalesTable from "./SalesTable";

const SalesTab = () => {
  return (
    <div className="dash-tabs">
      <Tabs className="dash-tab-container">
        <TabList className="dash-tab-head">
          <Tab>All</Tab>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
        </TabList>

        <TabPanel>
          <SalesTable />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      <PagBtn />
    </div>
  );
};

export default SalesTab;
