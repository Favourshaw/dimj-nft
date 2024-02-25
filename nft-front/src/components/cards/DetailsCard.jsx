import React from "react";
import "./cards.css";

const DetailsCard = (props) => {
  const { dets } = props;
  return (
    <div className="ta-card center-div">
      <div className="ta-wrapper">
        <div className="ta-content">
          <div className="ta-banner-cover">
            <img src={dets.banner} alt={dets.user_name} className="ta-banner" />
          </div>
          <div className="ta-user-info">
            <div className="ta-user-info-top">
              <div className="ta-ui-handle">{dets.handle}</div>
              <div className="ta-ui-uname">{dets.user_name}</div>
            </div>
            <div className="ta-user-info-left">
              <img
                src="https://zengo.com/wp-content/uploads/wETH_desktop.svg"
                alt="price"
                className="ta-ui-price-logo"
              />
              <div className="ta-ui-price">{dets.floor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
