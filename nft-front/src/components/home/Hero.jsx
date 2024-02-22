import React from "react";

const Hero = () => {
  return (
    <div className="hero center-div">
      <div className="hero-left hero-b">
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

        <div className="hero-left-info">
          <div className="hf-info-item center-div">
            <div className="hfi-count">200k+</div>
            <div className="hfi-label">Collections</div>
          </div>

          <div className="hf-info-item center-div">
            <div className="hfi-count">200k+</div>
            <div className="hfi-label">Collections</div>
          </div>

          <div className="hf-info-item center-div">
            <div className="hfi-count">410k+</div>
            <div className="hfi-label">Community</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-blob"></div>
        <div className="hero-right-diamond">
          <div className="diamond-item center-div">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/l6JPiRvpcbUAAAAC/grandpa-apes-grandpaape.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/247dOM9MXMEAAAAd/bayc-myth-division.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/1i16nMrNj88AAAAC/nft-marketing-nft-gorillas.gif"
              alt="diamond imd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
