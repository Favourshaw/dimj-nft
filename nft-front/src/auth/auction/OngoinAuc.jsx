import React from "react";
import { DashNftData } from "../../utils/DashNftData";
import OngAuctionCard from "./OngAuctionCard";
import PagBtn from "../../components/cards/PagBtn";

const OngoinAuc = () => {
  return (
    <>
      <div className="dcat-cards">
        {DashNftData.map((_gaming) => (
          <OngAuctionCard gaming={_gaming} />
        ))}
      </div>
      <div>
        <PagBtn />
      </div>
    </>
  );
};

export default OngoinAuc;
