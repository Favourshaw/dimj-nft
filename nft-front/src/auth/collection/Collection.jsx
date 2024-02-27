import React from "react";
import ColCardContainer from "./ColCardContainer";

const UserCollection = () => {
  return (
    <div className="dash-width">
      <div className="dash-top">
        <div className="dash-title t-grad-dark"> Account Summary</div>

        <div className="dash-sub">Go to settings to add a description.</div>
      </div>

      <div>
        <ColCardContainer />
      </div>
    </div>
  );
};

export default UserCollection;
