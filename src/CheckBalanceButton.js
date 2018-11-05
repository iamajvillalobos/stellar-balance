import React from "react";
import fetchXLMAddressBalances from "./fetchXLMAddressBalances";
import fetchXLMAddressFromFederation from "./fetchXLMAddressFromFederation";
import isFederatedAddress from "./isFederatedAddress";

function AddressCheckerButton({ address, onButtonClick, onError }) {
  async function fetchAddressBalances() {
    if (isFederatedAddress(address)) {
      let xlmAddress = await fetchXLMAddressFromFederation(address);
      if (xlmAddress.length > 0) {
        let result = await fetchXLMAddressBalances(xlmAddress);
        if (Array.isArray(result)) {
          onButtonClick(result);
        } else {
          onError(result);
        }
      } else {
        onError("Not Found");
      }
    } else {
      let result = await fetchXLMAddressBalances(address);
      if (Array.isArray(result)) {
        onButtonClick(result);
      } else {
        onError(result);
      }
    }
  }

  return (
    <div className="check-balance-button">
      <button onClick={fetchAddressBalances}>Check Balance</button>
    </div>
  );
}

export default AddressCheckerButton;
