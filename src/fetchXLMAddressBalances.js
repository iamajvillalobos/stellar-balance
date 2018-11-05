import axios from "axios";

function fetchXLMAddressBalances(address) {
  const url = `https://horizon.stellar.org/accounts/${address}`;
  return axios
    .get(url)
    .then(response => {
      return response.data.balances;
    })
    .catch(error => {
      return error.response.statusText;
    });
}

export default fetchXLMAddressBalances;
