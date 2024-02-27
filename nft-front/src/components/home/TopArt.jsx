import React from "react";
import Slider from "react-slick/lib/slider";
import { TopArtData } from "../../utils/topArts";
import TopArtCard from "../cards/TopArtCard";
import { Link } from "react-router-dom";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 2000,
  slidesToShow: 5,
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
      breakpoint: 1224,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },

    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
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

const TopArt = () => {
  return (
    <div className="top-art max-width">
      <div className="section-heading">
        <div className="section-title">
          <span className="t-grad-dark">Top Artist</span>
        </div>
        <div>
          <Link class="btn-arrow-fwd btn-a-body">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text hide-large">View All</span>

            <span class="button-text hide-small">See Entire Category</span>
          </Link>
        </div>
      </div>
      <div className="top-art-blob"></div>

      <Slider {...settings}>
        {TopArtData.map((_topArt) => (
          <TopArtCard topArt={_topArt} />
        ))}
      </Slider>
    </div>
  );
};

export default TopArt;
