import React from "react";
import ResultsTableRow from "./ResultsTableRow";

function ResultsTable({ balances }) {
  return (
    <div class="results-table">
      <div class="table-header">
        <span class="header-item">Token</span>
        <span class="header-item">Total</span>
      </div>
      <div class="table-contents">
        {balances.map(balance => {
          return <ResultsTableRow data={balance} />;
        })}
      </div>
    </div>
  );
}

export default ResultsTable;
