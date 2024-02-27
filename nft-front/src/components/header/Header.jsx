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
    <div className={color ? "header  max-width" : "header h-dark max-width"}>
      <div>
        logo <span className="t-grad-dark">testing</span>
      </div>
      <div className="header-right">
        <div>
          <FiSearch />
        </div>
        <div>
          <Link class="btn  btn-head">
            <span class="btn-avatar">
              <img src={Avatar} className="avatar" />
            </span>
            <div>Palmwinepapi</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
