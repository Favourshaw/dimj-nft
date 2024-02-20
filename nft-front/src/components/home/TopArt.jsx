import React from "react";
import Slider from "react-slick/lib/slider";
import { TopArtData } from "../../utils/topArts";
import TopArtCard from "../cards/TopArtCard";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoPlay: true,
  arrows: false,
};

const TopArt = () => {
  return (
    <div className="top-art">
      <div className="section-title center-div">
        <span className="t-grad-dark">Top Artist</span>
      </div>
      <div className="top-art-blob"></div>

      <Slider {...settings}>
        {TopArtData.map((_topArt) => (
          <TopArtCard topArt={_topArt} />
        ))}
      </Slider>

      <div className="ta-btn  center-div">
        <div className="btn btn-light">more</div>
      </div>
    </div>
  );
};

export default TopArt;
