import React from "react";
import { Link } from "react-router-dom";
import "../../assets/auth/css/exhibition.css";

const Ongoing = () => {
  return (
    <div className="ongoin">
      <div className="ongoin-card">
        <div>
          <div>
            <img
              src="https://axiomgallery.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdycpk2y94%2Fimage%2Fupload%2Fv1702729223%2Fexhibition%2Fisuiihtochgmzlkw5nfr.jpg&w=2048&q=75"
              alt=""
            />
          </div>
          <div>
            <div>The origin of merlin</div>
            <div className="oc-name">Justin la boy</div>
            <span>Discover the depth of the world wide sea</span>
          </div>
        </div>

        <div>
          <div>
            <span>floor</span>
            <div>2.009 ETH</div>
          </div>
          <div>
            <Link className="btn btn-sm-dark">Join</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
