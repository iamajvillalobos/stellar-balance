function isFederatedAddress(address) {
  const result = address.split("*");
  return result.length > 1 ? true : false;
}

export default isFederatedAddress;
