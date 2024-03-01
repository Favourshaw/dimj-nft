import React, { useState } from "react";
import "./header.css";
import Avatar from "../../assets/img/avatar.svg";

import { FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 92) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className="head">
        <div
          className={color ? "header  max-width" : "header h-dark max-width"}
        >
          <div>
            <Link to="/">
              logo <span className="t-grad-dark">testing</span>
            </Link>
          </div>
          <div className="header-right">
            <div className="btn btn-head">
              <span className="btn-avatar">
                <FiSearch className="avatar" />
              </span>
            </div>
            <div>
              <Link to="/dashboard" class="btn  btn-head">
                <span class="btn-avatar">
                  <img src={Avatar} className="avatar" />
                </span>
                <div>Palmwinepapi</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
