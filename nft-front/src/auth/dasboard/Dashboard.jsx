import React from "react";
import "../../assets/auth/css/dashboard.css";

import { Link } from "react-router-dom";
import SideTransCard from "../../components/cards/SideTransCard";
import SideSalesCard from "../../components/cards/SideSalesCard";
import DashNft from "./DashNft";

const Dashboard = () => {
  return (
    <div className="dash-width">
      <div className="dash-title t-grad-dark"> Account Summary</div>
      <div className="dash-container">
        <div className="dash-card-container">
          <div className="dash-cards dcc-top">
            <div className="dash-cards-col">
              account balance
              <div>
                <span>0</span> usdt
              </div>
            </div>
            <div className="dash-cards-btn">
              <Link className="btn btn-dark">Deposit</Link>
              <Link className="btn btn-light">Mint</Link>
              <Link className="btn btn-light">Withdraw</Link>
            </div>
          </div>
          <div className="dash-cards">
            <div className="dash-cards-col ">
              coins
              <div className="dash-cards-row">
                <img
                  className="cat-ui-price-logo"
                  src="https://zengo.com/wp-content/uploads/wETH_desktop.svg"
                />
                <div>
                  ETH <br />
                  <span>erc 20</span>
                </div>
              </div>
            </div>
            <div className="dash-cards-col ">
              coins
              <div className="dash-cards-row">
                <div>
                  <div>0%</div>
                  <div>
                    <hr className="hr" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dash-cards-col">
              coins
              <div className="dash-cards-row">
                <div className="dcr-text">
                  0 <br />
                  <span>~ $0</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="st-card">
                <div>NFTs</div>
                <div className="sm-btn">
                  <Link className="btn btn-sm-light">view all</Link>
                </div>
              </div>
              <DashNft />
            </div>
          </div>
        </div>
        <div className="dash-trans">
          <SideTransCard />
          <SideSalesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
