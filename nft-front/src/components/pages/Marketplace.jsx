import React from "react";

import CatCard from "../cards/CatCard";
import { TopArtData } from "../../utils/topArts";
import Nav from "../header/Nav";
import PagBtn from "../cards/PagBtn";

const Marketplace = () => {
  return (
    <>
      <div>
        <div className="cat">
          <div className="overlay"></div>
          <div className="max-width">
            <img
              src="https://axiomgallery.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fart-pfp.305000ca.jpg&w=3840&q=75"
              alt=""
              className="cat-profile-p"
            />
          </div>
        </div>
      </div>
      <div className="cat-title max-width">
        <div className="cat-title-head t-grad-dark">Art</div>
        <div className="cat-title-dets">
          <div className="ctd-items">
            Items <span>2116</span>
          </div>
          <div className="ctd-items">
            Items <span>2116</span>
          </div>
        </div>
        <div className="cat-title-info">
          Immerse yourself in the world of digital art with our NFT platform's
          dedicated art category. Discover and collect one-of-a-kind digital
          artworks created by talented artists from around the globe. From
          stunning paintings and sculptures to mesmerizing animations and
          immersive installations, experience the limitless possibilities of
          digital creativity.
        </div>
        <div className="cat-title-data">
          <div className="ctdt-items">
            Items <br />
            <span>2116</span>
          </div>

          <div className="ctdt-items">
            Items <br />
            <span>2116</span>
          </div>

          <div className="ctdt-items">
            Items <br />
            <span>2116</span>
          </div>

          <div className="ctdt-items">
            Items <br />
            <span>2116</span>
          </div>

          <div className="ctdt-items">
            Items <br />
            <span>2116</span>
          </div>
        </div>
      </div>
      <div className="cat-cards max-width">
        {TopArtData.map((_topArt) => (
          <CatCard gaming={_topArt} />
        ))}
      </div>
      <div className="max-width">
        <PagBtn />
      </div>
    </>
  );
};

export default Marketplace;
