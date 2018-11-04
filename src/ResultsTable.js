import React from "react";
import ResultsTableRow from "./ResultsTableRow";

function ResultsTable({ balances }) {
  return (
    <div className="results-table">
      <div className="table-header">
        <span className="header-item">Token</span>
        <span className="header-item">Total</span>
      </div>
      <div className="table-contents">
        {balances.map((balance, index) => {
          return <ResultsTableRow data={balance} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ResultsTable;
