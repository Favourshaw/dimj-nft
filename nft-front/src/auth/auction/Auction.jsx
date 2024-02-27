import React from "react";
import SideTransCard from "../../components/cards/SideTransCard";
import SideSalesCard from "../../components/cards/SideSalesCard";
import AuctionCard from "./AuctionCard";

const Auction = () => {
  return (
    <div className="auction dash-width">
      <div className="dash-title t-grad-dark">Auction</div>
      <div className="dash-nav">
        <div className="dash-container">
          <div className="dash-card-container">
            <AuctionCard />
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

export default Auction;
