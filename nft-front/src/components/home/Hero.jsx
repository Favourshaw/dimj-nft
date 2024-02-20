import React from "react";

const Hero = () => {
  return (
    <div className="hero center-div">
      <div className="hero-left">
        <div className="hero-left-heading">
          Discover, sell and collect
          <span className="t-grad-dark"> Extraordinary </span> NFT
        </div>
        <div className="hero-left-desc">
          Buy and sell the most trending NFT out there for the best price anyone
          can offer
        </div>

        <div className="hero-left-btn">
          <div className="btn btn-dark">explore</div>
          <div className="btn btn-light">create</div>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
