import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        logo <span className="t-grad-dark">testing</span>
      </div>
      <div className="header-right">
        <div>search</div>
        <div>
          <div className="btn btn-dark cu-po">login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
