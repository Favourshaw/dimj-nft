import React from "react";
import { DashNftData } from "../../utils/DashNftData";
import CollectionCard from "./CollectionCard";

const ColCardContainer = () => {
  return (
    <div className="dcat-cards">
      {DashNftData.map((_gaming) => (
        <CollectionCard gaming={_gaming} />
      ))}
    </div>
  );
};

export default ColCardContainer;
