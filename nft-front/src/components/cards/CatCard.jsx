import React from "react";

const CatCard = (props) => {
  const { gaming } = props;
  return (
    <div className="cat-card center-div ">
      <div className="cat-wrapper">
        <div className="cat-content">
          <img
            src={gaming.banner}
            alt={gaming.user_name}
            className="cat-banner"
          />

          <div className="cat-user-info">
            <div className="cat-user-info-top">
              <div className="cat-ui-handle">{gaming.handle}</div>
              <div className="cat-ui-uname">{gaming.user_name}</div>
            </div>
            <div className="cat-user-info-left">
              <img
                src="https://zengo.com/wp-content/uploads/wETH_desktop.svg"
                alt="price"
                className="cat-ui-price-logo"
              />
              <div className="cat-ui-price">{gaming.floor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
