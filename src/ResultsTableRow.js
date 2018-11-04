import React from "react";

function ResultsTableRow({ data }) {
  const tokenName = data.asset_code ? data.asset_code : "XLM";

  return (
    <tr>
      <td>{tokenName}</td>
      <td>{data.balance}</td>
    </tr>
  );
}

export default ResultsTableRow;
