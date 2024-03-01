import React from "react";
import { Link } from "react-router-dom";

const AuthHead = () => {
  return (
    <div className="head">
      <div className="header max-width">
        <div>
          <Link to="/">
            logo <span className="t-grad-dark">testing</span>
          </Link>
        </div>
        <div className="header-right">
          <div>
            <Link to="/" class="btn  btn-head">
              <div>Back</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHead;
