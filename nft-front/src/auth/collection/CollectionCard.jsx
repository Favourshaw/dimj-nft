import React from "react";
import { Link } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { IconContext } from "react-icons";
import "../../components/cards/cards.css";
import "../../assets/auth/css/dashcards.css";

const CollectionCard = (props) => {
  const { gaming } = props;
  return (
    <div className="dcat-card center-div ">
      <div className="dcat-wrapper">
        <div className="">
          <div className="dcat-b-container">
            <img
              src={gaming.banner}
              alt={gaming.user_name}
              className="dcat-banner"
            />

            <div className="tarara">
              <div>
                <BsCopy />
              </div>
              <div>Membership</div>
            </div>
          </div>
          <div className="dcat-user-info">
            <div className="cat-user-info-top">
              <div className="cat-ui-handle">{gaming.handle}</div>
              <div>
                <div className="cat-ui-uname">Floor</div>
                <div className="cat-ui-price">
                  {gaming.floor}
                  <span>
                    <Link>
                      <IconContext.Provider
                        value={{ className: "cat-ui-p-icon" }}
                      >
                        <LuArrowUpRightFromCircle />
                      </IconContext.Provider>
                    </Link>
                  </span>
                </div>
              </div>

              <div>
                <div className="cat-ui-uname">Push to Market</div>
                <div className="cat-ui-price">
                  <label class="switch-btn">
                    <input type="checkbox" className="switch-input" />
                    <span class="btn-slider">
                      <span class="circle"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
