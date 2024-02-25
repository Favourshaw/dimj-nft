import React, { useState } from "react";
import "./header.css";
import Avatar from "../../assets/img/avatar.svg";

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
    <div className={color ? "header h-dark max-width" : "header  max-width"}>
      <div>
        logo <span className="t-grad-dark">testing</span>
      </div>
      <div className="header-right">
        <div>search</div>
        <div>
          <Link class="btn  btn-head">
            <span class="btn-avatar">
              <img src={Avatar} className="avatar" />
            </span>
            Palmwinepapi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
