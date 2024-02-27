import React from "react";
import "../../assets/table.css";
import TableBody from "./TableBody";
import { TableData } from "../../utils/TableData";

const HistoryTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Transaction</th>
            <th scope="col">Amount</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((_table1) => (
            <TableBody table1={_table1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
