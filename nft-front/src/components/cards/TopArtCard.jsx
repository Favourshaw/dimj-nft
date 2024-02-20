import React from "react";
import "./cards.css";

const TopArtCard = (props) => {
  const { topArt } = props;
  return (
    <div className="ta-card center-div">
      <div className="ta-wrapper">
        <div className="ta-content">
          <img
            src={topArt.banner}
            alt={topArt.user_name}
            className="ta-banner"
          />

          <div className="ta-user-info">
            <div className="ta-user-info-top">
              <div className="ta-ui-handle">{topArt.handle}</div>
              <div className="ta-ui-uname">{topArt.user_name}</div>
            </div>
            <div className="ta-user-info-left">
              <img
                src="https://zengo.com/wp-content/uploads/wETH_desktop.svg"
                alt="price"
                className="ta-ui-price-logo"
              />
              <div className="ta-ui-price">{topArt.floor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtCard;
