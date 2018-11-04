import React from "react";

function AddressTextField({ onTextChange }) {
  function handleAddressTextFieldChange(event) {
    onTextChange(event.target.value);
  }

  return <input type="text" onChange={handleAddressTextFieldChange} />;
}

export default AddressTextField;
