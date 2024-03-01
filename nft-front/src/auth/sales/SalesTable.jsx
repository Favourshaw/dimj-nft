import React from "react";
import { SalesTableData } from "../../utils/TableData";
import SalesTableBody from "./SalesTableBody";

const SalesTable = () => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Transaction</th>
            <th scope="col">NFT name</th>
            <th scope="col">Amount</th>
            <th scope="col">Customer</th>
            <th scope="col">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {SalesTableData.map((_table1) => (
            <SalesTableBody table1={_table1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
