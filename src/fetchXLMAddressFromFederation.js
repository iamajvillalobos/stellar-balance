import axios from "axios";

function fetchXLMAddressFromFederation(address) {
  if (address.length === 0) {
    return "";
  }

  const domain = address.split("*")[1];
  const url = `https://federation.${domain}/federation?q=${address}`;
  return axios
    .get(url)
    .then(response => {
      return response.data.account_id;
    })
    .catch(error => {
      return "";
    });
}

export default fetchXLMAddressFromFederation;
