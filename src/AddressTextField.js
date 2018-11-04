import React from "react";

function AddressTextField({ onTextChange }) {
  function handleAddressTextFieldChange(event) {
    onTextChange(event.target.value);
  }

  return (
    <div className="address-text-field">
      <input
        type="text"
        onChange={handleAddressTextFieldChange}
        placeholder="GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB"
      />
    </div>
  );
}

export default AddressTextField;
