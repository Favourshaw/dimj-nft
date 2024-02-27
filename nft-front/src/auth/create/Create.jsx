import React from "react";
import { Link } from "react-router-dom";
import SideTransCard from "../../components/cards/SideTransCard";
import SideSalesCard from "../../components/cards/SideSalesCard";
import CreateForm from "./CreateForm";

const Create = () => {
  return (
    <div className="dash-width">
      <div className="dash-title t-grad-dark"> Account Summary</div>
      <div className="dash-container">
        <div className="dash-card-container">
          <CreateForm />
        </div>
        <div className="dash-trans">
          <SideTransCard />
          <SideSalesCard />
        </div>
      </div>
    </div>
  );
};

export default Create;
