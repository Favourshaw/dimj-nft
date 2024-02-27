import React from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../../utils/NavData";

const Nav = () => {
  return (
    <div className="nav max-width">
      <div className="nav-container">
        {NavData.map((val, key) => {
          return (
            <NavLink to={val.link} exact={val.exact} key={key}>
              <div>{val.title}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
