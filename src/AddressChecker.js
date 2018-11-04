import React from "react";
import AddressTextField from "./AddressTextField";
import CheckBalanceButton from "./CheckBalanceButton";
import ResultsTable from "./ResultsTable";
import Notification from "./Notification";

class AddressChecker extends React.Component {
  constructor() {
    super();
    this.state = { balances: [], address: "", error: null };
  }

  handleBalanceChange = balances => {
    this.setState({ balances: balances });
  };

  handleAddressTextFieldChange = address => {
    this.setState({ address: address });
  };

  handleError = code => {
    const message = "Address is invalid";

    if (code === 404 || code === 400) {
      this.setState({ error: message });
      this.setState({ balances: [] });
    } else {
      this.setState({ error: null });
    }
  };

  handleNotificationClose = () => {
    this.setState({ error: null });
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half address-checker">
          {this.state.error ? (
            <Notification
              message={this.state.error}
              onClick={this.handleNotificationClose}
            />
          ) : null}

          <h1 className="title">Enter your public xlm address</h1>
          <p className="subtitle">
            Your public address starts with <strong>G</strong>. Don't paste here
            your secret key that starts with <strong>S</strong>.
          </p>
          <AddressTextField onTextChange={this.handleAddressTextFieldChange} />
          <CheckBalanceButton
            onButtonClick={this.handleBalanceChange}
            address={this.state.address}
            onError={this.handleError}
          />
          {this.state.balances.length > 0 ? (
            <ResultsTable balances={this.state.balances} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default AddressChecker;
