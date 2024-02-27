/* testing file*/
import React from "react";
import Slider from "react-slick/lib/slider";
import { GamingData } from "../../utils/gaming";
import GamingCard from "../cards/GamingCard";
import { Link } from "react-router-dom";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  dots: false,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Gaming = () => {
  return (
    <div className="top-art max-width">
      <div className="section-heading">
        <div className="section-title">
          <span className="t-grad-dark">Top Artist</span>
        </div>
        <div className="ta-btn  ">
          <Link className="btn btn-sm-light" to="/art">
            View All
          </Link>
        </div>
      </div>
      <div className="top-art-blob"></div>

      <Slider {...settings}>
        {GamingData.map((_gaming) => (
          <GamingCard gaming={_gaming} />
        ))}
      </Slider>
    </div>
  );
};

export default Gaming;
