import React from "react";
import fetchXLMAddressBalances from "./fetchXLMAddressBalances";

function AddressCheckerButton({ address, onButtonClick, onError }) {
  async function fetchAddressBalances() {
    let result = await fetchXLMAddressBalances(address);
    if (Array.isArray(result)) {
      onButtonClick(result);
    } else {
      onError(result);
    }
  }

  return (
    <div className="check-balance-button">
      <button onClick={fetchAddressBalances}>Check Balance</button>
    </div>
  );
}

export default AddressCheckerButton;
