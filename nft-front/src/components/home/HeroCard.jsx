import React from "react";

const HeroCard = (props) => {
  const { hero } = props;
  return (
    <div className="hero-card center-div">
      <div className="hero-content">
        <img src={hero.banner} alt={hero.user_name} className="hero-banner" />

        <div className="hero-info">
          <div className="ta-user-info-top">
            <div className="ta-ui-handle">{hero.handle}</div>
          </div>
          <div className="ta-user-info-left">
            <div className="ta-ui-price">
              floor <span>{hero.floor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
