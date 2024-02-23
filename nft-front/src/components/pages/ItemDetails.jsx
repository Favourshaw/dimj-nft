import React from "react";
import { Link } from "react-router-dom";
import "./details.css";
import "../../assets/btn.css";
import DetailsCard from "../cards/DetailsCard";

import Slider from "react-slick/lib/slider";
import { TopArtData } from "../../utils/topArts";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 8000,
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
      breakpoint: 1220,
      settings: {
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ItemDetails = () => {
  return (
    <div className="details max-width">
      <a class="btn-arrow btn-a-body">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Back</span>
      </a>

      <div className="detail-container">
        <div className="details-left">
          <img
            className="details-img"
            src="https://i.seadn.io/s/raw/files/c43f2d06c168b926f25e7f5f008ea827.jpg?auto=format&dpr=1&h=500"
          />
        </div>

        <div className="details-right">
          <div className="dr-heading t-grad-dark">The_neuron_000</div>
          <div className="dr-sub-heading">
            Owned by <span>evelyn_scott</span>
          </div>

          <div className="dr-details">
            i made installation prototype using brain machine interface called
            "nextmind". you can have an experience to pick up box using only
            your brain without hand, eye and mouth and/or any. your playing data
            will be affect to the visual, your realtime 3d captured point cloud
            is moving like neuron itself according to the data. this system is
            made with unity for nextmind data receiving, touchdesigner for the
            data analyze, notch for visual, kinect azure for realtime 3d
            capture, razer blade for development/operation pc, nextmind for
            brain machine interface. https://www.artstation.com/artwork/9mDlrW
          </div>

          <div className="dr-bottom">
            <div className="drb-heading">Current Price</div>
            <div className="drb-price">
              8.5
              <span> WETH</span>
            </div>
            <div className="drb-fiat">~ $19,990.33</div>
            <div className="drb-btn">
              <Link className="btn-gradient">
                <span> Buy NFT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="details-cards ">
        <div className="details-c-title">
          <span className="t-grad-dark">Name</span>
        </div>
        <div className="max-width">
          <Slider {...settings}>
            {TopArtData.map((_dets) => (
              <DetailsCard dets={_dets} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
