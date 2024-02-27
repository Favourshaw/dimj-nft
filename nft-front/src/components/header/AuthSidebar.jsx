import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "../../utils/sidebarData";
import { IconContext } from "react-icons";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const AuthSidebar = (props) => {
  const [navClose, setNavClose] = useState(false);
  useEffect(() => {
    props.onCollapse(navClose);
  }, [navClose]);

  return (
    <aside className={`dash-sidebar ${navClose ? "nav-close" : ""}`}>
      <div className="dash-logo">
        {navClose ? <MdKeyboardDoubleArrowRight /> : "logo"}
      </div>
      <div>
        <button
          className="sidebar-burger-container"
          onClick={() => setNavClose(!navClose)}
        >
          <IconContext.Provider value={{ className: "sidebar-burger" }}>
            {navClose ? (
              <MdKeyboardDoubleArrowRight />
            ) : (
              <MdKeyboardDoubleArrowLeft />
            )}
          </IconContext.Provider>
        </button>
      </div>
      <nav className="dash-nav ">
        <div className={`dash-nav-links item1 ${navClose ? "navi" : ""}`}>
          {SidebarData.slice(0, 8).map((val, key) => {
            return (
              <NavLink to={val.link} exact={val.exact} key={key}>
                <IconContext.Provider value={{ className: "sidebar-icon" }}>
                  <div>{val.icon}</div>
                </IconContext.Provider>
                <div className={navClose ? "nav-title-close" : "nav-title"}>
                  {val.title}
                </div>

                {navClose ? (
                  <div className=""></div>
                ) : (
                  <div className="dash-nav-active"></div>
                )}
              </NavLink>
            );
          })}
        </div>
        <div className={`dash-nav-links  ${navClose ? "navi" : ""}`}>
          {SidebarData.slice(8, 9).map((val, key) => {
            return (
              <NavLink
                id={window.location.pathname == val.link ? "active" : ""}
                to={val.link}
                key={key}
              >
                <IconContext.Provider value={{ className: "sidebar-icon" }}>
                  <div>{val.icon}</div>
                </IconContext.Provider>
                <div className={navClose ? "nav-title-close" : "nav-title"}>
                  {val.title}
                </div>

                <div className="dash-nav-active"></div>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default AuthSidebar;
