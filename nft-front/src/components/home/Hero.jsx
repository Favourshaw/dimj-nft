import React from "react";
import { Link } from "react-router-dom";

import Nav from "../header/Nav";

const Hero = () => {
  return (
    <div className="hero center-div max-width hero-bg">
      <Nav />
      <div className="hero-left hero-b">
        <div className="hero-left-heading">
          Discover, sell
          <br /> and collect
          <span className="t-grad-dark"> Extraordinary </span> NFT
        </div>
        <div className="hero-left-desc">
          Buy and sell the most trending NFT out there for the best price anyone
          can offer
        </div>

        <div className="hero-left-btn">
          <div>
            <Link class="btn-wave">
              <span class="wave-text">Explore</span>
              <div class="wave"></div>
            </Link>
          </div>
          <div>
            <Link class="btn btn-light">Buy NF</Link>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-right-blob"></div>
        <div className="hero-right-diamond">
          <div className="diamond-item center-div item1">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div item2">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/l6JPiRvpcbUAAAAC/grandpa-apes-grandpaape.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div item3">
            <img
              className="hr-image"
              src="https://media1.tenor.com/m/247dOM9MXMEAAAAd/bayc-myth-division.gif"
              alt="diamond imd"
            />
          </div>

          <div className="diamond-item center-div item4">
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
