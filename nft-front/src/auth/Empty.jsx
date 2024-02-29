import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="empty">
      <div>No Auction</div>
      <div>
        <Link className="btn btn-sm-light">Auction an NFT</Link>
      </div>
    </div>
  );
};

export default Empty;
