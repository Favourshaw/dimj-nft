import React from "react";

import { Link } from "react-router-dom";
import { FiDownload, FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";
import { GoDotFill } from "react-icons/go";

const SideTransCard = () => {
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
            <IconContext.Provider value={{ className: "stc-icon-red" }}>
              <FiUpload />
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
              <IconContext.Provider value={{ className: "stci-stat-pending" }}>
                <GoDotFill />
              </IconContext.Provider>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stc-data">
        <div>
          <div>
            <IconContext.Provider value={{ className: "stc-icon-green" }}>
              <FiDownload />
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
              <IconContext.Provider value={{ className: "stci-stat-success" }}>
                <GoDotFill />
              </IconContext.Provider>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTransCard;
