import React from "react";
import AddressTextField from "./AddressTextField";
import CheckBalanceButton from "./CheckBalanceButton";
import ResultsTable from "./ResultsTable";

class AddressChecker extends React.Component {
  constructor() {
    super();
    this.state = { balances: [], address: "" };
    this.handleAddressTextFieldChange = this.handleAddressTextFieldChange.bind(
      this
    );
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
  }

  handleBalanceChange(balances) {
    this.setState({ balances: balances });
  }

  handleAddressTextFieldChange(address) {
    this.setState({ address: address });
  }

  render() {
    return (
      <div>
        <h1>Enter your public xlm address</h1>
        <p>
          Your public address is a safe address you can share with others.
          Example is GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB.
        </p>
        <AddressTextField onTextChange={this.handleAddressTextFieldChange} />
        <CheckBalanceButton
          onButtonClick={this.handleBalanceChange}
          address={this.state.address}
        />
        <ResultsTable balances={this.state.balances} />
      </div>
    );
  }
}

export default AddressChecker;
