import React from "react";

function ResultsTableRow({ data }) {
  const tokenName = data.asset_code ? data.asset_code : "XLM";
  const balance = data.balance;

  return (
    <div class="content-row">
      <span class="row-item">{tokenName}</span>
      <span class="row-item">{balance}</span>
    </div>
  );
}

export default ResultsTableRow;
