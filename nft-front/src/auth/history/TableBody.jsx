import React from "react";
import { FiDownload, FiUpload } from "react-icons/fi";
import { IconContext } from "react-icons";

import { GoDotFill } from "react-icons/go";

export const TableBody = (props) => {
  const { table1 } = props;
  return (
    <tr>
      <td data-label="Transaction" className="table-trans">
        <div>
          {table1.transaction === "Withdrawal" ? (
            <IconContext.Provider value={{ className: "stc-icon-red" }}>
              <FiUpload />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "stc-icon-green" }}>
              <FiDownload />
            </IconContext.Provider>
          )}

          <span>{table1.transaction}</span>
        </div>
      </td>
      <td data-label="Amount">
        <span>{table1.amount}</span>
      </td>
      <td data-label="Date/Time">{table1.date}</td>
      <td data-label="Status" className="table-stats">
        <div>
          {table1.status === "Completed" ? (
            <IconContext.Provider value={{ className: "stci-stat-success" }}>
              <GoDotFill />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ className: "stci-stat-pending" }}>
              <GoDotFill />
            </IconContext.Provider>
          )}
          <span>{table1.status}</span>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
