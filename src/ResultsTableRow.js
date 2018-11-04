import React from "react";

function ResultsTableRow({ data }) {
  const tokenName = data.asset_code ? data.asset_code : "XLM";
  const balance = data.balance;

  return (
    <div className="content-row">
      <span className="row-item">{tokenName}</span>
      <span className="row-item">{balance}</span>
    </div>
  );
}

export default ResultsTableRow;
