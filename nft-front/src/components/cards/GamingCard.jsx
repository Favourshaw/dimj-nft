import React from "react";

const GamingCard = (props) => {
  const { gaming } = props;
  return (
    <div className="ta-card center-div">
      <div className="ta-wrapper">
        <div className="ta-content">
          <img
            src={gaming.banner}
            alt={gaming.user_name}
            className="ta-banner"
          />

          <div className="ta-user-info">
            <div className="ta-user-info-top">
              <div className="ta-ui-handle">{gaming.handle}</div>
              <div className="ta-ui-uname">{gaming.user_name}</div>
            </div>
            <div className="ta-user-info-left">
              <img
                src="https://zengo.com/wp-content/uploads/wETH_desktop.svg"
                alt="price"
                className="ta-ui-price-logo"
              />
              <div className="ta-ui-price">{gaming.floor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingCard;
