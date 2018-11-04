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
      <div className="columns is-centered">
        <div className="column is-half address-checker">
          <h1 className="title">Enter your public xlm address</h1>
          <p className="subtitle">
            Your public address starts with <strong>G</strong>. Don't paste here
            your secret key that starts with <strong>S</strong>.
          </p>
          <AddressTextField onTextChange={this.handleAddressTextFieldChange} />
          <CheckBalanceButton
            onButtonClick={this.handleBalanceChange}
            address={this.state.address}
          />
          <ResultsTable balances={this.state.balances} />
        </div>
      </div>
    );
  }
}

export default AddressChecker;
