import React from "react";
import { Link } from "react-router-dom";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { IconContext } from "react-icons";

const SideSalesCard = () => {
  return (
    <div>
      <div className="st-card">
        <div>Recent Transaction</div>
        <div className="sm-btn">
          <Link className="btn btn-sm-light">view all</Link>
        </div>
      </div>
      <div className="stc-data">
        <div>
          <div>
            <IconContext.Provider value={{ className: "stc-icon-green" }}>
              <PiArrowsCounterClockwiseBold />
            </IconContext.Provider>
          </div>
          <div className="stc-item">
            Withdrawal <br />
            <div>2024-02-19 05:16</div>
          </div>
        </div>
        <div>
          <div className="stc-item dcr-text">
            -2.5 ETH <br />
            <div>
              <span>from nataliewilliams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSalesCard;
