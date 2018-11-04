import React from "react";
import ResultsTableRow from "./ResultsTableRow";

function ResultsTable({ balances }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Token</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {balances.map(balance => {
          return <ResultsTableRow data={balance} />;
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
