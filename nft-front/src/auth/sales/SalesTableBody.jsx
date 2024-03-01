import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";

import { GoDotFill } from "react-icons/go";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";

export const SalesTableBody = (props) => {
  const { table1 } = props;
  return (
    <tr>
      <td data-label="Transaction" className="table-trans">
        <div>
          {table1.transaction === "Buy" ? (
            <IconContext.Provider value={{ className: "stc-icon-green" }}>
              <PiArrowsCounterClockwiseBold />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "stc-icon-red" }}>
              <FiDownload />
            </IconContext.Provider>
          )}

          <span>{table1.transaction}</span>
        </div>
      </td>

      <td data-label="NFT name">
        <span>{table1.nftName}</span>
      </td>
      <td data-label="Amount">
        <span>{table1.amount}</span>
      </td>

      <td data-label="Customer">
        <span>From {table1.customer}</span>
      </td>
      <td data-label="Date/Time">{table1.date}</td>
    </tr>
  );
};

export default SalesTableBody;
