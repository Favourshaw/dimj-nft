import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { RxLightningBolt } from "react-icons/rx";
import { FiBell } from "react-icons/fi";
import { IconContext } from "react-icons";
import { SidebarData } from "../../utils/sidebarData";
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";

const AuthHeader = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <div className="topmenu">
        <div className="topmenu-text">&nbsp;</div>
        <div className="topmenu-right">
          <Link className="btn  btn-head" to="/">
            <RxLightningBolt /> Upgrade now
          </Link>
          <Link className="notification" to="/notification">
            <IconContext.Provider value={{ className: "top-bell" }}>
              <FiBell />
            </IconContext.Provider>
          </Link>
        </div>
      </div>

      <div className="dash-topmenu-mobile">
        <div className="navLogo">logo</div>
        <div className={isNavExpanded ? "navLinksMobile" : "navLinks"}>
          {SidebarData.slice(0, 6).map((val, key) => {
            return (
              <NavLink
                to={val.link}
                exact={val.exact}
                key={key}
                className="dash-mobile-link"
              >
                <div className="bbb">{val.title}</div>
              </NavLink>
            );
          })}

          {SidebarData.slice(-1).map((val, key) => {
            return (
              <NavLink
                to={val.link}
                exact={val.exact}
                key={key}
                className="dash-mobile-link logout"
              >
                <div className="bbb">{val.title}</div>
              </NavLink>
            );
          })}
        </div>
        <div>
          <button
            className="nav-mobile"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <IconContext.Provider value={{ color: "#555", size: "30px" }}>
              {isNavExpanded ? <TfiClose /> : <GiHamburgerMenu />}
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
