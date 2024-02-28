import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { TopArtData } from "../../utils/topArts";
import TopArtCard from "../cards/TopArtCard";
import Nav from "../header/Nav";
import HeroCard from "./HeroCard";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
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
const Hero = () => {
  return (
    <>
      <div className="hhh">
        <div className="hero-bg"></div>
        <div className=" hero ">
          <Nav></Nav>
          <div className="hero-slide">
            <Slider {...settings}>
              {TopArtData.map((_hero) => (
                <HeroCard hero={_hero} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
