import React from "react";
import axios from "axios";

const STELLAR_API_URL = "https://horizon.stellar.org/accounts";

function AddressCheckerButton({ address, onButtonClick }) {
  function fetchAddressBalances(event) {
    const url = `${STELLAR_API_URL}/${address}`;
    axios.get(url).then(response => {
      const balances = response.data.balances;
      onButtonClick(balances);
    });
  }

  return (
    <div class="check-balance-button">
      <button onClick={fetchAddressBalances}>Check Balance</button>
    </div>
  );
}

export default AddressCheckerButton;
