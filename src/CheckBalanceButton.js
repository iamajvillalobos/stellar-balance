import React from "react";
import axios from "axios";

const STELLAR_API_URL = "https://horizon.stellar.org/accounts";

function AddressCheckerButton({ address, onButtonClick, onError }) {
  function fetchAddressBalances() {
    const url = `${STELLAR_API_URL}/${address}`;
    axios
      .get(url)
      .then(response => {
        onButtonClick(response.data.balances);
      })
      .catch(error => {
        onError(error.response.statusText);
      });
  }

  return (
    <div className="check-balance-button">
      <button onClick={fetchAddressBalances}>Check Balance</button>
    </div>
  );
}

export default AddressCheckerButton;
